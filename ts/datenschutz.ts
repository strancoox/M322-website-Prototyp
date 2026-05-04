// ============================================================
//  Datenschutz-Seite: "Cookie zurücksetzen"-Button
// ============================================================

const STORAGE_KEY = "rm_fanpage_cookie_accepted";

document.addEventListener("DOMContentLoaded", () => {
  const resetBtn = document.getElementById("cookie-reset");
  if (!resetBtn) return;

  resetBtn.addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEY);
    alert("Cookie-Zustimmung wurde zurückgesetzt. Beim nächsten Seitenaufruf erscheint der Banner wieder.");
  });
});
