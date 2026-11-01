import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";
import { build } from "./build.ts";
await build();
const root = resolve(".");
const port = Number(process.env.PORT || 4173);
const types: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".csv": "text/csv; charset=utf-8",
  ".md": "text/plain; charset=utf-8",
};
createServer(async (req, res) => {
  try {
    const url = new URL(req.url || "/", "http://localhost");
    let path = resolve(root, "." + decodeURIComponent(url.pathname));
    if (path !== root && !path.startsWith(root + sep)) {
      res.writeHead(403);
      res.end();
      return;
    }
    const info = await stat(path);
    if (info.isDirectory()) {
      if (!url.pathname.endsWith("/")) {
        res.writeHead(301, { Location: url.pathname + "/" + url.search });
        res.end();
        return;
      }
      path = resolve(path, "index.html");
    }
    const content = await readFile(path);
    res.writeHead(200, {
      "Content-Type": types[extname(path)] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    res.end(content);
  } catch {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end(await readFile("404.html"));
  }
}).listen(port, "127.0.0.1", () =>
  console.log(
    `Fieldbook: http://localhost:${port} — run npm run build after content edits.`,
  ),
);
