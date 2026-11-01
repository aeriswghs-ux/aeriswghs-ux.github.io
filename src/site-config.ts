/** Set SITE_URL for a custom domain or a repository subpath deployment. */
export const siteURL = new URL(
  process.env.SITE_URL || "https://aeriswghs-ux.github.io/",
);
if (!["http:", "https:"].includes(siteURL.protocol))
  throw new Error("SITE_URL must be an HTTP(S) URL.");
if (!siteURL.pathname.endsWith("/")) siteURL.pathname += "/";
