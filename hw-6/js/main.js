//Вивести на екран всі числа від 1 до 10 за допомогою циклу while.
console.log('task 1')
let counter = 1;
while (counter <= 10) {
    console.log(counter); 
    counter += 1; 
}

//Вивести на екран всі парні числа від 2 до 20 за допомогою циклу for. Якщо число не парне, пропустити його за допомогою continue.
console.log('task 2')
for (let i = 2; i <= 20; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}

// Вивести на екран таблицю множення числа 7 за допомогою циклу for.
console.log('task 3')
for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}
// Створити масив з числами від 1 до 5. Вивести на екран кожен елемент масиву за допомогою циклу while.
console.log('task 4')
let arr = [1,2,3,4,5];
let arrStr = 0;

while(arrStr < arr.length){
    console.log(arr[arrStr]);
    arrStr++
}
//Створити масив із числами від 1 до 10. За допомогою циклу for пройтися по масиву та вивести на екран всі числа, крім числа 7. Якщо зустрінете число 7, закінчити виконання циклу за допомогою оператора break.
console.log('task 5')
let arr10 = [1,2,3,4,5,6,7,8,9,10]
for(let num7 of arr10) {
    if(num7 === 7) break;
    console.log(num7);
  }

//Створити скрипт, який виводить на екран всі числа, які менші за n. Якщо зустрічається число, що більше або дорівнює n, цикл повинен бути закінчений за допомогою break.
console.log('task 6')
let arrN = [1,2,3,4,5,6,7,8,9,10]
let n = 8;
for(let numbers of arrN){
    if(numbers >= n) break;
    console.log(numbers)
}

//За допомогою циклу while вивести на екран всі числа від 1 до 20, крім чисел, кратних 3. Якщо зустрінете число, кратне 3, цикл повинен продовжити виконання за допомогою оператора continue.
console.log('task 7')
let i = 1;

while( i <= 20){
    if( i % 3 === 0){
        i++;
        continue;
    }
    console.log(i);
  i++;
}



