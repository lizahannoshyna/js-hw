// #1
console.log("#1");

const withdraw = function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
};
let array = ["Mango", "Poly", "Ajax"];

withdraw(array);

// #2

const inputPrice = document.getElementById("price-input");
const btnPrice = document.getElementById("btnPrice");
const messageView = document.getElementById("message");

const price = function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(" ");
  const wordCount = words.length;
  const totalPrice = wordCount * pricePerWord;
  return totalPrice;
};

btnPrice.addEventListener("click", function () {
  const userInput = inputPrice.value;
  const pricePerWord = 10;
  const totalCost = price(userInput, pricePerWord);
  messageView.textContent = `Ваше замовлення " ${userInput} " буде коштувати ${totalCost} грн`;
});

//#3
console.log("#3");

function findLongestWord(string) {
  const wordString = string.split(" ");

  let longestWord = "";

  for (const word of wordString) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(findLongestWord("Hello world! JavaScript is awesome!")); // "JavaScript"

// #4
console.log("#4");
function formatString(string) {
  if (string.length <= 40) {
    return string;
  } else {
    return string.slice(0, 40) + "...";
  }
}

console.log(formatString("Цей рядок менший за сорок символів"));
console.log(
  formatString(
    "Цей рядок є дуже довгим і його потрібно обрізати, бо він перевищує 40 символів"
  )
);

//#5
console.log("#5");
function checkForSpam(message) {
  const lowerCaseMessage = message.toLowerCase();
  return lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");
}

console.log(checkForSpam("Lorem spam ipsum"));
console.log(checkForSpam("Lorem sale ipsum!"));
console.log(checkForSpam("Hello, world!"));

//#6

let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введіть число (або натисніть Cancel для завершення):");

  // Якщо користувач натиснув Cancel, виходимо з циклу
  if (input === null) {
    break;
  }

  const number = Number(input);

  if (isNaN(number)) {
    alert("Було введено не число, спробуйте ще раз");
  } else {
    numbers.push(number);
  }
} while (true);

for (const num of numbers) {
  total += num;
}

if (numbers.length > 0) {
  alert(`Загальна сума чисел дорівнює ${total}`);
} else {
  alert("Масив порожній. Немає чисел для обчислення суми.");
}

//#7
console.log("#756754");
let logins = ["Mango", "Poly", "Ajax"];

// isLoginValid
function isLoginValid(login) {
  return login.length >= 4 && login.length <= 16;
}

//isLoginUnique
function isLoginUnique(allLogins, login) {
  return !allLogins.includes(login);
}

// addLogin(allLogins, login)
function addLogin(allLogins, login) {
  //1
  if (!isLoginValid(login)) {
    return "Помилка! Логін повинен бути від 4 до 16 символів";
  }
  //2
  if (!isLoginUnique(allLogins, login)) {
    return "Такий логін уже використовується!";
  }
  //3
  else allLogins.push(logins);
  {
    return "Логін успішно доданий!";
  }
}
console.log(logins);
console.log(addLogin(logins, "Kiwi")); //Логін успішно доданий!
console.log(addLogin(logins, "Abc")); // Помилка! Логін повинен бути від 4 до 16 символів
console.log(addLogin(logins, "Mango")); // Такий логін уже використовується!
 

