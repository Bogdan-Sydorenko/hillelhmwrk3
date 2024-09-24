function Number() {
    let item;

    for (let i = 0; i < 10; i++) {
        item = prompt("Введіть число більше 100:");

        if (item > 100 || i === 9) {
            console.log("Останнє введене число: " + item);
            break;
        } else {
            console.log("Число повинно бути більше ста, спробуйте ще раз");
        }
    }
}

Number();

