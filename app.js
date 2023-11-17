// DOM

const touches = document.querySelectorAll(".button");
console.log(touches);

// Convert NodeList to Array
const touchesArray = Array.from(touches);
// or const touchesArray = [...touches];

const listKeycode = touchesArray.map((touche) => touche.dataset.key);
console.log(listKeycode);

document.addEventListener("keydown", (e) => {
  const valeur = e.keyCode.toString();
  //   console.log(valeur, typeof valeur);
});

document.addEventListener("click", (e) => {
  const valeur = e.target.dataset.key;
  //   console.log(valeur, typeof valeur);
});
