/* Kontakt-Formular: Validierung + Demo-Versand */
(function () {
  function init() {
    var form = document.getElementById("contact-form");
    var status = document.getElementById("form-status");
    if (!form || !status) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.hidden = false;
      status.classList.remove("error");

      var data = new FormData(form);
      var name = String(data.get("name") || "").trim();
      var email = String(data.get("email") || "").trim();
      var message = String(data.get("message") || "").trim();

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

      status.textContent =
        "Danke " + name + ", deine Nachricht wurde erfolgreich gesendet!";
      form.reset();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
