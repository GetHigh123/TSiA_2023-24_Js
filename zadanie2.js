// zadanie 1
heder = document.querySelector('header');
heder.style.backgroundColor= "yellow";

// zadanie 2
pream = document.querySelector('header');
pream.style.fontFamily = "Arial Black";
pream.innerHTML = 'Preambuła';

// zadanie 3
section = document.getElementsByTagName("section");
for (const el of section) {
    el.style.border= "2px solid brown";
}  

// zadanie 4
document.querySelector(".main_column h1").innerText = "Specjalność szefa:";

// zadanie 5
const nowyp = document.createElement("p");
document.querySelector(".main_column").appendChild(nowyp);
document.querySelector(".main_column p").innerText = "Kebab na frytkach -_-";

// zadanie 6
const ppdiv = document.createElement("div");
const pdiv = document.createElement("p");
document.querySelector("footer").appendChild(ppdiv);
document.querySelector("footer div").style.backgroundColor = "pink";
document.querySelector("footer div").appendChild(pdiv);
document.querySelector("footer div p").innerText = "&copy";
document.querySelector("footer div p").style.textAlign = "center";

// zadanie 7
const column = document.querySelectorAll(".side_column");
column[1].remove();

// zadanie 8

const p1 = document.createElement("p");
const p2 = document.createElement("p2");
document.querySelector("header").appendChild(p1);
document.querySelector("header").appendChild(p2);
document.querySelector("header p2").innerText = "<i>Pochylony tekst</i>";
document.querySelector("header p").innerHTML = "<i>Pochylony tekst</i>";