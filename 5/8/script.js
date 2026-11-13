const f = (a, b) => a > b ? 1
                    : a < b ? -1
                    : 0

console.log(f(1, 0));
console.log(f(0, 1));
console.log(f(0, 0));