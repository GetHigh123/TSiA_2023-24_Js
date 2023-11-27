document.getElementById('Znajdź').addEventListener('click', function() {
    var digitCount = document.querySelector('input[name="digits"]:checked').value;
    var resultsDiv = document.getElementById('p1');
    resultsDiv.innerHTML = '';

    var start = Math.pow(10, digitCount - 1);
    var end = Math.pow(10, digitCount) - 1;
    var count = 0;

    var numbersDiv = document.createElement('div');
    numbersDiv.style.border = '1px dashed black';
    numbersDiv.style.padding = '10px';
    numbersDiv.style.marginBottom = '10px';

    for (var i = start; i <= end; i++) {
        if (isPalindrome(i)) {
            var span = document.createElement('span');
            span.textContent = i + ', ';
            numbersDiv.appendChild(span);
            count++;
        }
    }
if (isPalindrome.value= this.lastChild) {
    span.textContent = i + '. ';
}
    resultsDiv.appendChild(numbersDiv);
    resultsDiv.innerHTML += '<p>Ilość takich liczb to: <b>' + count + '</b> .</p>';
});

function isPalindrome(num) {
    var str = num.toString();
    var reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
