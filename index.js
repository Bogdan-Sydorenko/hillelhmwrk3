class Calculator {

    add(a, b) {
        return a + b;
    }

    minus(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    degree(a, b) {
        if (b === 0) {
            console.log("Ділення на нуль неможливе!");
        } else
        return a / b;
    }
}

const calculator = new Calculator();

console.log (calculator.add(32, 43));
console.log (calculator.minus(179,79));
console.log (calculator.multiply(3,30));
console.log (calculator.degree(50,2));
console.log (calculator.degree(5,0));


