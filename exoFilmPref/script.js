// mise en place du switch de langue
const lang = document.querySelector(".lang");
lang.addEventListener("click", () => {
  if (lang.textContent === "Fr") {
    lang.style.left = "82%";
    lang.textContent = "Elf";
    lang.style.backgroundColor = "#f3c93e";
    lang.style.transition = "0.5s";
    document.body.style.fontFamily = "elfique";
  }
  else {
    lang.addEventListener;
    lang.style.left = "0";
    lang.textContent = "Fr";
    lang.style.backgroundColor = "#d8d2bc";
    lang.style.transition = "0.5s";
    document.body.style.fontFamily = "classique";
  }
});
