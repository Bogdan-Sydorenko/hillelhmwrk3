let sum = 0
let quantity = 0

function average (arr) {

    arr.forEach((item) => {
        if (typeof(item) === 'number') {
            sum += item;
            quantity++;
        }
    });

    if (quantity === 0) {
        console.log('В масиві немає елементів типу (число)');
    }

    return sum / quantity;
}

const array = [3, 'word', 5, undefined, 6, 'str', true, 56, 76, 4]

console.log(average(array));
