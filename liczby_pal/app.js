 const isPalindrome = (num) => {
        let str = num.toString();
        return str === str.split('').reverse().join('');
    }

    const findPalindromes = (min, max) => {
        let palindromes = [];
        for (let i = min; i <= max; i++) {
            if (isPalindrome(i)) {
                palindromes.push(i);
            }
        }
        return palindromes;
    }

    const form = document.querySelector('form');
    const fieldset = document.querySelector('fieldset');
    const radios = document.querySelectorAll('input[type="radio"]');
    const values = ['dwucyfrowe', 'trzycyfrowe', 'czterocyfrowe', 'pięciocyfrowe'];

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let checked = Array.from(radios).find(radio => radio.checked);
        let index = values.indexOf(checked.value);
        let min = Math.pow(10, index + 1);
        let max = Math.pow(10, index + 2) - 1;
        let palindromes = findPalindromes(min, max);
        let html = '';
        palindromes.forEach(palindrome => {
            html += `<p>${palindrome}</p>`;
        });
        fieldset.innerHTML = html;
    });