// mise en place du switch de langue
const lang = document.querySelector(".lang");
lang?.addEventListener("click", () => {
  if (lang.textContent === "Fr") {
    lang.style.left = "82%";
    lang.textContent = "Elf";
    lang.style.backgroundColor = "#f3c93e";
    lang.style.transition = "0.5s";
    document.body.style.fontFamily = "elfique";
  } else {
    lang.addEventListener;
    lang.style.left = "0";
    lang.textContent = "Fr";
    lang.style.backgroundColor = "#d8d2bc";
    lang.style.transition = "0.5s";
    document.body.style.fontFamily = "classique";
  }
});

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

registerForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  register();
});

// Mise en place de la connexion 
const pseudoCo = document.getElementById("pseudoConnexion");
const passwordCo = document.getElementById("passwordConnexion");

function connexion() {
  let pseudoVerif = localStorage.getItem("pseudo");
  let passwordVerif = localStorage.getItem("password");
  if (pseudoVerif != pseudoCo.value || passwordVerif != passwordCo.value) {
    alert("Le mot de passe ou le pseudo est incorrect");
  } else {
    localStorage.setItem('Auth', 'true');
    window.location.href = "/coursCDA/exoFilmPref/film.html";
  }
}

document.getElementById("loginForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  connexion();
});

// Mise en place de la déconnexion
document.querySelector('.off')?.addEventListener('click', ()=>{
  localStorage.setItem('Auth', "false");
  window.location.href = "/coursCDA/exoFilmPref/connexion.html";
})