function Poczatek() {
    var p = document.getElementById("p1");
    p.innerHTML = p.innerHTML.padStart(20, '_');
}

function Koniec() {
    var p = document.getElementById("p1");
    p.innerHTML = p.innerHTML.padEnd(30, '.');
}