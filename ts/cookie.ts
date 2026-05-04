// ============================================================
//  Cookie-Banner Logik
// ============================================================

const STORAGE_KEY = "rm_fanpage_cookie_accepted";

export function initCookieBanner(): void {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("cookie-accept");
  if (!banner || !acceptBtn) return;

  const accepted = localStorage.getItem(STORAGE_KEY) === "true";
  if (!accepted) {
    banner.hidden = false;
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem(STORAGE_KEY, "true");
    banner.hidden = true;
  });
}

// Auto-init falls Modul direkt eingebunden wird (z.B. auf Sub-Seiten)
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", initCookieBanner);
}
