let num = 12345;
let out = 1;
while (num != 0) {
    out *= num % 10;
    num = Math.trunc(num / 10);
}
console.log(out);