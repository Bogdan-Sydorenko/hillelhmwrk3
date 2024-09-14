let num = prompt("Введіть ціле число:");

function primeNum(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

if (primeNum(num) === true) {
    console.log(num + " є простим числом.");
} else {
    console.log(num + " не є простим числом.");
}
