// mise en place de l'enregistrement de compte
const pseudo = document.getElementById("pseudo");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordBis = document.getElementById("passwordBis");
const registerForm = document.getElementById("registerForm");

function register() {
  if (password.value != passwordBis.value) {
    alert("Les mots de passe ne correspondent pas");
  } else {
    localStorage.setItem("pseudo", pseudo.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    localStorage.setItem("passwordBis", passwordBis.value);
    window.location.href = "/coursCDA/exoFilmPref/connexion.html";
  }
}

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  register();
});
