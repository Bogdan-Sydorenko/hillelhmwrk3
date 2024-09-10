let userYears = (prompt("Введіть свій рік народження"));
if (userYears === null || userYears === undefined) {
    console.log("Шкода, що ви не захотіли ввести свій рік народження")
}else {
    console.log(2024 - userYears)
}

let userCity = prompt("Введіть місто проживання");
if (userCity === null || userCity === undefined) {
    console.log("Шкода, що ви не захотіли ввести своє місто")
}
else if (userCity === "Київ") {
    console.log("Ти живеш у столиці України")
}else if (userCity === "Вашингтон") {
    console.log("Ти живеш у столиці Сполучених Штатів Америки")
}else if (userCity === "Лондон") {
    console.log("Ти живеш у столиці Англії")
}else {console.log(`Ти живеш у місті ${userCity}`)}

let userSport = prompt("Введіть свій улюблений вид спорту");
if (userSport === null || userSport === undefined) {
    console.log("Шкода, що ви не захотіли ввести свій улюблений вид спорту")
}
else if (userSport === "Футбол") {
    console.log("Круто! Хочеш стати Леонелем Мессі?")
}else if (userSport === "Баскетбол") {
    console.log("Круто! Хочеш стати Леброном Джеймсом?")
}else if (userSport === "Теніс") {
    console.log("Круто! Хочеш стати Андре Агасси?")
}



