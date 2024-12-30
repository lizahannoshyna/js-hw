// task 1
const firstBtn = document.getElementById("first-btn");
const firstMessage = document.getElementById("first-message");
firstBtn.addEventListener("click", () => {
  alert("Hello world !");
});

// task 2
console.log("task 2");

const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

window.checkGuess = function () {
  //window робить функцію доступною глобально
  const guessField = document.getElementById("guessField");
  const guessResult = document.getElementById("guessResult");
  const userGuess = parseInt(guessField.value);

  if (isNaN(userGuess)) {
    guessResult.textContent = "Будь ласка, введіть коректне число!";
  } else if (userGuess < randomNumber) {
    guessResult.textContent = "Ваше число занадто маленьке!";
  } else if (userGuess > randomNumber) {
    guessResult.textContent = "Ваше число занадто велике!";
  } else {
    guessResult.textContent = "Вітаємо! Ви вгадали число!";
  }
};

//  task 3
let clickCount = 0;

const updateClickMessage = (count) => {
  let clickCounter = document.getElementById("clickCounter");
  clickCounter.textContent = `Ви клікнили по екрану ${count} раз(и)`;
};

const handlePageClick = (callback) => {
  clickCount++;
  callback(clickCount);
};

document.addEventListener("click", () => handlePageClick(updateClickMessage));

//  task 4
console.log("task 4");

const applyCallbackToEachElement = (arr, callback) => {
  let resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultArray.push(callback(arr[i]));
  }
  return resultArray;
};

function square(number) {
  return number * number;
}

const arr = [1, 2, 3, 4, 5];
const result = applyCallbackToEachElement(arr, square);
console.log(result); // [1, 4, 9, 16, 25]

// task 5

console.log("task 5");

const calculateDiscountedPrice = (price, discount, callback) => {
  const discountedPrice = price - (price * discount) / 100;
  callback(discountedPrice);
};

const showDiscountPrice = (discountedPrice) => {
  console.log(` Ціна зі знижкою: ${discountedPrice} грн`);
};
calculateDiscountedPrice(1946, 10, showDiscountPrice);


// задача 1
function showName(){
    console.log('Вася'); //передається в чергу мікротасків
}
setTimeout(showName,0);
console.log('Коля'); // виконується одразу

// задача 2
// функція викликана вірно.(декларативний підхід)
showMessage();
function showMessage(){
    console.log('Повідомлення');
}

// задача 3
// фукнція викликана не вірно.(експресивний підхід)
// showMassage();
// let showMassage = function showMassage(){
//     console.log('Повідомлення');
// }

// задача 4
'use strict'
let showMossage;
if(2>1){
    showMossage = function(){
        console.log('Повідомлення');
    }
}
showMossage();


