function removeElement(array, item) {
    const indexItem = array.indexOf(item);
    if (indexItem !== -1) {
        array.splice(indexItem, 1);
    }
}

const array = [1, 3, 4, 6, 2, 5, 7];

removeElement(array,4);

console.log(array);

