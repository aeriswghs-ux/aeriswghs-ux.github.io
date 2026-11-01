"use strict";
document.documentElement.classList.add("js");
try {
  const preference = localStorage.getItem("fieldbook-theme");
  if (preference === "light" || preference === "dark")
    document.documentElement.dataset.theme = preference;
} catch {
  /* The default reading mode remains available without local storage. */
}
