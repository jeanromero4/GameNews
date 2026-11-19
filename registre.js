const form = document.getElementById("register-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const status = document.getElementById("form-status");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    status.textContent = "";

    if (!username.value.trim()) {
        status.textContent = "Introdueix el nom d'usuari.";
        username.focus();
        return;
    }

    if (!email.value.includes("@") || !email.validity.valid) {
        status.textContent = "El correu electrònic ha de contenir un @ i ser vàlid.";
        email.focus();
        return;
    }

    if (password.value.length < 8) {
        status.textContent = "La contrasenya ha de tenir almenys 8 caràcters.";
        password.focus();
        return;
    }

    status.textContent = "Registre correcte.";

    window.location.href = "index.html";
});

