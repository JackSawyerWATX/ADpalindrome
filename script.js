

document.getElementById('check-btn').addEventListener('click', function () {
    const inputValue = document.getElementById('text-input').value.trim();
    const resultElement = document.getElementById('result');

    if (inputValue === '') {
        alert('Please input a value');
    } else if (isPalindrome(inputValue)) {
        resultElement.textContent = `${inputValue} is a plaindrome!`
    } else {
        resultElement.textContent = `${inputValue} is NOT a palindrome.`
    }
});

function isPalindrome(str) {
    const normalizedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = normalizedStr.split('').reverse().join('');
    return normalizedStr === reversedStr;
}