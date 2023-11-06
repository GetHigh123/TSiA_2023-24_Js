function toUpperCase() {
    document.getElementById('text').innerText = originalText.toUpperCase();
}

function toLowerCase() {
    document.getElementById('text').innerText = originalText.toLowerCase();
}

function restoreText() {
    document.getElementById('text').innerText = originalText;
}

window.onload = function() {
    originalText = document.getElementById('text').innerText;
}