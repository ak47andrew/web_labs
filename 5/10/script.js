let result = Number(prompt("Please enter your salary:"));   

// 1. Add bonus 15%
result += result * 0.15;
console.log("=== After Bonus ===");
console.log(result);

// 2. Taxes 10%
result -= result * 0.10;
console.log("=== After Taxes ===");
console.log(result);

// 3. Shop -90
result -= 90;
console.log("=== After Shop ===");
console.log(result);

// 4. Split between me and (*imaginary*) wife (aka buying a shitload of Miku minis)
result /= 2;
console.log("=== After Split (with Miku) ===");
console.log(result);

alert(result);