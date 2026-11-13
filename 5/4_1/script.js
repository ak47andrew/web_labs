let time = 59;
let out = ["Первая", "Вторая", "Третья", "Четвёртая"];
// 0 - 59; 60 / 4 = 15 => 60 / 15 = 4
let ind = Math.floor(time / 15);
console.log(out[ind]);