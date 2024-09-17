let inputString = prompt("Введіть рядок");

let charsToRemove = prompt("Введіть символи для видалення");

function removeChars(inputString, charsToRemove) {
    return inputString.split('').filter(chars => !charsToRemove.includes(chars)).join('');
}

const result = removeChars( inputString, charsToRemove);
console.log(result);

