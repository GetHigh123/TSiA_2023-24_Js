function PoliczZnaki() {
    var text = document.getElementById('nowy').innerText;
    var length = text.length;
    document.getElementById('nowyp').innerText = 'Tekst powyżej ma długość ' + length + ' znaków.';
    document.getElementById('nowyp').style.display = 'block';
}