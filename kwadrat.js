function drawRectangle() {
    const dlugosc = parseFloat(document.getElementById("dlugosc").value);
    const szerokosc = parseFloat(document.getElementById("szerokosc").value);
    const kolor = document.getElementById("kolor").value;

    const prostokat = document.getElementById("prostokat");
    prostokat.style.width = dlugosc * 10 + "px";
    prostokat.style.height = szerokosc * 10 + "px";
    prostokat.style.backgroundColor = kolor;

    const obwod = 2 * (dlugosc + szerokosc);
    const pole = dlugosc * szerokosc;

    const info = `Obwód prostokąta jest równy: ${obwod} cm 

    Pole prostokątak jest równe: ${pole}cm²`;
    document.getElementById("info").innerText = info;
}