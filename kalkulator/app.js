function appendToCalc(value) {
    var currentInput = document.getElementById('Wejście').textContent;
    var lastChar = currentInput.slice(-1);
    var isLastCharSpecial = /[+\-*/]/.test(lastChar);
    var isValueSpecial = /[+\-*/]/.test(value);

    if (isLastCharSpecial && isValueSpecial) {
        return;
    } else {
        document.getElementById('Wejście').textContent += value;
    }
}

function clearCalc() {
    document.getElementById('Wejście').textContent = '';
    document.getElementById('Wynik').textContent = '';
}

function calculate() {
    var input = document.getElementById('Wejście').textContent;
    var regex = /^(\d+)([+\-*/])(\d+)$/;
    var match = input.match(regex);

    if (match) {
        var operand1 = parseFloat(match[1]);
        var operator = match[2];
        var operand2 = parseFloat(match[3]);

        var result;
        switch (operator) {
            case '+':
                result = operand1 + operand2;
                break;
            case '-':
                result = operand1 - operand2;
                break;
            case '*':
                result = operand1 * operand2;
                break;
            case '÷':
                if (operand2 !== 0) {
                    result = operand1 ÷ operand2;
                } else {
                    result = 'Pamiętaj cholero, nie dziel przez zero!';
                }
                break;
            default:
                result = 'Error';
        }

        document.getElementById('Wejście').textContent = '';
        document.getElementById('Wynik').textContent = result;
    } else {
        document.getElementById('Wynik').textContent = 'Error';
    }
}