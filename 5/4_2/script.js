let lang = "123";
let week;

switch (lang) {
    case "ru":
        week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Восскрсенье"]
        break;
    case "by":
        week = ["Панядзелак", "Аўторак", "Серада", "Чацвер", "Пятніца", "Субота", "Восскрсенье"]
        break;
    default:
        week = [];
        break;
}

for (let index = 0; index < week.length; index++) {
    console.log(week[index]);
}