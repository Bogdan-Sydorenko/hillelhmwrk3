let mainNumber = 10369
let fifthNumber = mainNumber % 10
let fourthNumber = Math.floor((mainNumber / 10) % 10)
let thirdNumber = Math.floor((mainNumber / 100) % 10)
let secondNumber = Math.floor((mainNumber / 1000) % 10)
let firstNumber = Math.floor(mainNumber / 10000)
console.log(firstNumber)
console.log(secondNumber)
console.log(thirdNumber)
console.log(fourthNumber)
console.log(fifthNumber)


