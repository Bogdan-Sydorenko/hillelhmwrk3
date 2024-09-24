function multiplication (first) {
    return function (second) {
        return first * second
    }
}

console.log(multiplication(5)(2));