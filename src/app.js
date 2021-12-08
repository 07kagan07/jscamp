console.log("slm");
let dolarDun = 13.5;

{
  let dolarDun = 12;
}

console.log(dolarDun);

const euroDun = 11.2;
//euroDun = 12;
console.log(euroDun);

let krediler = ["Konut Kredisi", "Araç Kredisi", "İhtiyaç Kredisi"];

function kredits() {
  for (var i = 0; i < krediler.length; i++) {
    console.log(krediler[i]);
  }
}
