console.log("slm");
let dolarDun = 13.5;

{
  let dolarDun = 12;
}

console.log(dolarDun);

const euroDun = 11.2;
//euroDun = 12;
console.log(euroDun);

let yemekler = ["İmam Ayıldı", "Köfte", "Mantı", "Mercimek", "Spagitti"];

function getir(element) {
  var element = document.getElementById("get");
  element.innerHTML = yemekler[Math.floor(Math.random() * yemekler.length)];
}
