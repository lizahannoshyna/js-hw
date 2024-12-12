// task 1. перевірити тип змінної (typeof)
const result= 5+5+'5';
console.log(result); // 105 => 5+5=10 & 10+'5'= 105
console.log(typeof result); // string

// task 2 чи включає рядок в себе "@" => includes
const email = "mymail@gmail.com";

if(email.includes("@") ){
    console.log("Вказана пошта містить знака @");
}
else{
    console.log("Вказана пошта не містить знака @");
}

const eSymbols = email.length; // загальна кількість символів => length
console.log(`Загальна кількість символів ${eSymbols}`)


// task 3
const my = "my";
const name = "name";
const is = "is";

let fullname = `${my} ${name} ${is}`;

fullname += 'Liza' // += -> додає (конкатенує) новий рядок до існуючого

console.log(fullname) // виводимо в консоль

// task 4
const userName = 'Олександра';
const payment = '300';

alert(`Дякуємо , ${userName}! До сплати ${payment} гривень.`);
