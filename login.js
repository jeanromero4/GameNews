const form = document.getElementById("login-form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const status = document.getElementById("form-status");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    status.textContent = "";

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

    status.textContent = "Dades correctes.";

    window.location.href = "index.html";
});

