//1
const celsius = 25;
const fahrenheit = celsius * 1.8 + 32;
console.log(fahrenheit);

//2
const daysInMonth = 30;
const hoursInMonth = daysInMonth * 24;
const minutesInMonth = hoursInMonth * 60;
console.log(hoursInMonth);
console.log(minutesInMonth);

//3
let health = 100;
let energy = 100;

health -= 20;
energy -= 40;

console.log(health);
console.log(energy);

//4
let shop = 1087;

shop = shop - (shop*10) / 100;

console.log(shop)

//5
const numberFive = 5.39202
console.log(Math.floor(numberFive));

//6
let numberString = "123.45";

let decimalNumber = parseFloat(numberString);

console.log(decimalNumber);

//7
let numberStringTwo = "123.45";

let decimalNumberTwo = parseInt(numberStringTwo);

console.log(decimalNumberTwo);

//8
console.log(Math.sqrt(24))

//9
let integerNumber = 74;
let stringNumber = "1263";

let integerNumberResult = parseInt(stringNumber);
console.log(integerNumberResult);

let stringNumberResult = integerNumber.toString();
console.log(stringNumberResult );