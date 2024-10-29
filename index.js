class Coach {

    constructor(name, specialization, rating) {
        this.name = name;
        this.specialization = specialization;
        this.rating = rating;
    }

    displayInfo() {
        console.log(`Ім'я тренера: ${this.name}`);
        console.log(`Спеціалізація: ${this.specialization}`);
        console.log(`Рейтинг: ${this.rating}`);
    }
}

const coach1 = new Coach('Alice', 'Fitness',5.2);
const coach2 = new Coach('Bohdan', 'Yoga',9.8);

coach1.displayInfo();
coach2.displayInfo();

