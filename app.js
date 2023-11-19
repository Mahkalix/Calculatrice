// DOM

const touches = document.querySelectorAll(".button");
console.log(touches);

const ecran = document.querySelector(".ecran");

// Convert NodeList to Array
const touchesArray = Array.from(touches);
// or const touchesArray = [...touches];

const listKeycode = touchesArray.map((touche) => touche.dataset.key);
// console.log(listKeycode);

document.addEventListener("keydown", (e) => {
  const valeur = e.keyCode.toString();
  //   console.log(valeur, typeof valeur);
  calculer(valeur);
});

document.addEventListener("click", (e) => {
  const valeur = e.target.dataset.key;
  //   console.log(valeur, typeof valeur);
  calculer(valeur);
});

const calculer = (valeur) => {
  if (!isNaN(parseInt(valeur))) {
    console.log("yes");
  }
  if (listKeycode.includes(valeur)) {
    switch (valeur) {
      case "8":
        ecran.textContent = "";
        break;
      case "13":
        const calcul = eval(ecran.textContent);
        ecran.textContent = calcul;
        break;
      default:
        const indexKeycode = listKeycode.indexOf(valeur);
        const touche = touches[indexKeycode];
        ecran.textContent += touche.innerHTML;
    }
  }
};

window.addEventListener("error", (e) => {
  alert("Une erreur est survenue dans votre calcul : " + e.message);
  ecran.textContent = "";
});
