const pseudo = document.getElementById("pseudoConnexion");
const password = document.getElementById("passwordConnexion");
function connexion() {
  let pseudoVerif = localStorage.getItem("pseudo");
  let passwordVerif = localStorage.getItem("password");
  if (pseudoVerif != pseudo.value || passwordVerif != password.value) {
    alert("Le mot de passe ou le pseudo est incorrect");
  } else {
    window.location.href = "/coursCDA/exoFilmPref/film.html";
  }
}

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  connexion();
});
