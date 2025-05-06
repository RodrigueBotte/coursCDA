// let hello = ("Hello World");
// console.log(hello);

let maVoiture = {
    marque: "Peugeot",
    modele: "308",
    annee: 2020,
    couleur: "rouge"
}
console.log(maVoiture);

let maVoiture2 = new Object();
maVoiture2.marque = "Citroen";
maVoiture2.modele = "C4";
maVoiture2.annee = 2021;
maVoiture2.couleur = "bleu";
console.log(maVoiture2);

let deux = 2;
let trois = 3;
let quatre = 4;

if (deux == 2) {
    console.log("deux est égal à 2");
}
else {
    console.log("deux n'est pas égal à 2");
}

if (trois == 3) {
    console.log("trois est égal à 3");  
    
}
else {
    console.log("trois n'est pas égal à 3");
}

if (quatre == 4) {
    console.log("quatre est égal à 4");
}
else {
    console.log("quatre n'est pas égal à 4");
}

let note = 15;
if (note >= 16) {
    noteUSA = "A";
}
else if (note >= 14) {
    noteUSA = "B";
}   
else if (note >= 12) {
    noteUSA = "C";
}
else if (note >= 10) {
    noteUSA = "D";
}
else if (note >= 8) {
    noteUSA = "E";
}
else {
    noteUSA = "F";;
}

console.log("la note en France est " + note);
console.log("la note aux USA est " + noteUSA);

switch (noteUSA) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("très bien");
        break;
    case "C":
        console.log("Bien");
        break;
    case "D":
        console.log("Passable");
        break;
    case "E":
        console.log("Insuffisant");
        break;
    case "F":
        console.log("Echec");
        break;
    default:
        break;
}

document.getElementById("hello");
console.log(hello);

const bonjour = document.getElementById("bonjour");
const btn = document.getElementById("toggle");

btn.addEventListener("click", () => {
    bonjour.classList.toggle("hidden");
})

const text = document.getElementById("text");
const ajout = document.getElementById("ajout");
const tache = document.getElementById("taches");

ajout.addEventListener("click", () => {
    console.log("yop");
    const div = document.createElement("div");
    const p = document.createElement("p");
    const valid = document.createElement("button");
    valid.innerHTML = "✔";
    valid.addEventListener("click", () => {
        p.classList.toggle("valid");
    })
    const supp = document.createElement("button");
    supp.innerHTML = "X";
    supp.addEventListener("click", () => {
        tache.removeChild(div);
        localStorage.removeItem("tache");
    })
    p.innerText = text.value;
    div.appendChild(p);
    div.appendChild(supp);
    div.appendChild(valid);
    tache.appendChild(div);
    text.value = "";
    localStorage.setItem("tache", tache.innerHTML);
})

tache.innerHTML = localStorage.getItem("tache");