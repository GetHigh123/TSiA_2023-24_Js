let liczba = prompt("Podaj dowolną liczbę rzeczywistą:");
document.getElementById("header").innerHTML = liczba;

let abs = Math.abs(liczba);
let ceil = Math.ceil(liczba);
let floor = Math.floor(liczba);
let max = Math.max(liczba, -liczba);
let min = Math.min(liczba, -liczba);
let pow = Math.pow(liczba, 2);
let round = Math.round(liczba);
let sqrt = Math.sqrt(Math.abs(liczba));

document.write("<p>abs(" + liczba + ") = " + abs + " - zwraca wartość bezwzględną liczby</p>");
document.write("<p>ceil(" + liczba + ") = " + ceil + " - zwraca najmniejszą liczbę całkowitą, większą lub równą podanej liczbie</p>");
document.write("<p>floor(" + liczba + ") = " + floor + " - zwraca największą liczbę całkowitą mniejszą lub równą podanej liczbie</p>");
document.write("<p>max(" + liczba + ", " + (-liczba) + ") = " + max + " - zwraca największą przekazaną liczbę</p>");
document.write("<p>min(" + liczba + ", " + (-liczba) + ") = " + min + " - zwraca najmniejszą przekazaną liczbę</p>");
document.write("<p>pow(" + liczba + ", 2) = " + pow + " - zwraca wartość liczby 1 podniesionej do potęgi liczby 2</p>");
document.write("<p>round(" + liczba + ") = " + round + " - zwraca zaokrąglenie danej liczby do najbliższej liczby całkowitej</p>");
document.write("<p>sqrt(abs(" + liczba + ")) = " + sqrt.toFixed(2) + " - zwraca pierwiastek kwadratowy liczby</p>");

document.write('<button onclick="location.reload()">Odśwież stronę</button>');