let num = +prompt("Enter a number");

for (let i = 1; i <= 100; i++) {
    if (i * i <= num) {
        console.log(i);
    }else {
        break;
    }
}