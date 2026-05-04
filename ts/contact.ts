// ============================================================
//  Kontakt-Formular: einfache Client-Side-Validierung + Demo-Versand
// ============================================================

import { initCookieBanner } from "./cookie.js";

document.addEventListener("DOMContentLoaded", () => {
  initCookieBanner();

  const form = document.getElementById("contact-form") as HTMLFormElement | null;
  const status = document.getElementById("form-status") as HTMLParagraphElement | null;
  if (!form || !status) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.hidden = false;
    status.classList.remove("error");

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      status.textContent = "Bitte alle Felder ausfüllen.";
      status.classList.add("error");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      status.textContent = "Bitte eine gültige E-Mail-Adresse eingeben.";
      status.classList.add("error");
      return;
    }

    // Demo: hier könnte ein echter Backend-Call hin
    status.textContent = `Danke ${name}, deine Nachricht wurde erfolgreich gesendet!`;
    form.reset();
  });
});
