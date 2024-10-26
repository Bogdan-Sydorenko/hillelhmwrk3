function Student(firstName, lastName, birthYear, grades = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = grades;
    this.attendance = new Array(25).fill(null);
    this.attendanceCount = 0;


    this.getAge = function() {
        const currentYear = 2024 - birthYear;
        return currentYear;
    };


    this.getAverageGrade = function() {
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return this.grades.length > 0 ? sum / this.grades.length : 0;
    };


    this.present = function() {
        if (this.attendanceCount < 25) {
            this.attendance[this.attendanceCount++] = true;
        } else {
            console.log("Максимальна кількість записів у відвідуваності досягнута.");
        }
    };


    this.absent = function() {
        if (this.attendanceCount < 25) {
            this.attendance[this.attendanceCount++] = false;
        } else {
            console.log("Максимальна кількість записів у відвідуваності досягнута.");
        }
    };

    this.getAttendanceRate = function() {
        const attendedClasses = this.attendance.filter(mark => mark === true).length;
        const totalClasses = this.attendance.filter(mark => mark !== null).length;
        return totalClasses > 0 ? attendedClasses / totalClasses : 0.;
    };

    this.summary = function() {
        const avgGrade = this.getAverageGrade();
        const avgAttendance = this.getAttendanceRate();

        if (avgGrade > 90 && avgAttendance > 0.9) {
            return "Молодець!";
        } else if (avgGrade > 90 || avgAttendance > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    };
}

const student1 = new Student("Владислав", "Шевчук", 2008, [40, 30, 23, 19]);
const student2 = new Student("Максим", "Голіщенко", 2006, [80, 85, 78, 82]);
const student3 = new Student("Богдан", "Сидоренко", 2007, [89, 90, 100, 40]);

student1.present();
student1.present();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();


student2.present();
student2.absent();
student2.present();
student2.absent();

student3.absent();
student3.absent();
student3.absent();

console.log(`Вік Владислава Шевчука: ${student1.getAge()}`);
console.log(`Середній бал Владислава Шевчука: ${student1.getAverageGrade()}`);
console.log(`Відвідуваність Владислава Шевчука: ${student1.getAttendanceRate()}`);
console.log(`Підсумок для Владислава Шевчука: ${student1.summary()}`);

console.log(`Вік Максима Голіщенко: ${student2.getAge()}`);
console.log(`Середній бал Максима Голіщенко: ${student2.getAverageGrade()}`);
console.log(`Відвідуваність Максима Голіщенко: ${student2.getAttendanceRate()}`);
console.log(`Підсумок для Максима Голіщенко: ${student2.summary()}`);

console.log(`Вік Богдана Сидоренка: ${student3.getAge()}`);
console.log(`Середній бал Богдана Сидоренка: ${student3.getAverageGrade()}`);
console.log(`Відвідуваність Богдана Сидоренка: ${student3.getAttendanceRate()}`);
console.log(`Підсумок для Богдана Сидоренка: ${student3.summary()}`);
