function generateLosowaLiczba() {
    var random = Math.floor(Math.random() * 30) + 1;
    document.getElementById('LosowaLiczba').innerHTML = random;
    document.getElementById('LosowaLiczba').style.color = 'darkorchid';

    if (random >= 20) {
        document.getElementById('WiększalubRówna').innerHTML = 'Wylosowana liczba jest większa lub równa 20.';
        document.getElementById('WiększalubRówna').style.color = 'magenta';
    }

    if (random % 2 == 0) {
        document.getElementById('evenOrOdd').innerHTML = 'Wylosowana liczba jest parzysta.';
    } else {
        document.getElementById('evenOrOdd').innerHTML = 'Wylosowana liczba jest nieparzysta.';
    }
    document.getElementById('evenOrOdd').style.color = 'navy';

    if (random <= 10) {
        document.getElementById('tens').innerHTML = 'Pierwsza dziesiątka.';
    } else if (random <= 20) {
        document.getElementById('tens').innerHTML = 'Druga dziesiątka.';
    } else {
        document.getElementById('tens').innerHTML = 'Trzecia dziesiątka.';
    }
    document.getElementById('tens').style.color = 'deeppink';
}