function sq(a) {
    return a * a;
}

function sum(a, b) {
    return a + b;
}

function f3(a, b, c) {
    return (a - b) / c;
}

function week(ind) {
    const arr = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Восскрсенье"];
    return arr[ind];
}

console.log(sq(3));
console.log(sum(3, 5));
console.log(week(1))