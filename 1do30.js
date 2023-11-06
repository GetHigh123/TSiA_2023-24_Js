function Losuj() {
    var losowa = Math.floor(Math.random() * 30) + 1;
    var p1 = document.getElementById('p1');
    var p2 = document.getElementById('p2');
    var p3 = document.getElementById('p3');
    var p4 = document.getElementById('p4');

    p1.innerHTML = losowa;
    p1.style.color = 'darkorchid';

    p2.innerHTML = losowa >= 20 ? 'Wylosowana liczba jest większa lub równa 20' : '';
    p2.style.color = 'magenta';

    p3.innerHTML = losowa % 2 == 0 ? 'Wylosowana liczba jest parzysta' : 'Wylosowana liczba jest nieparzysta';
    p3.style.color = 'navy';

    if (losowa <= 10) {
        p4.innerHTML = 'Pierwsza dziesiątka';
    } else if (losowa <= 20) {
        p4.innerHTML = 'Druga dziesiątka';
    } else {
        p4.innerHTML = 'Trzecia dziesiątka';
    }
    p4.style.color = 'deeppink';
}