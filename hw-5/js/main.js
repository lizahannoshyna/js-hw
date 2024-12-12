//1
document.getElementById("d-select").addEventListener("change", function () {
    const selectedDrink = this.value; // Отримуємо обраний варіант
    const message = document.getElementById("message");
  
    switch (selectedDrink) {
      case "coffee":
        message.textContent = "Ви обрали каву. Час прокидатися!";
        break;
      case "tea":
        message.textContent = "Ви обрали чай. Насолоджуйтесь затишком!";
        break;
      case "juice":
        message.textContent = "Ви обрали сік. Чудовий вибір для здоров’я!";
        break;
      default:
        message.textContent = "";
    }
  });
  

// 2
function checkDay() {
  const day = document.getElementById("day-input").value.toLowerCase();
  let message;
  switch (day) {
    case "понеділок":
    case "вівторок":
    case "середа":
    case "четвер":
    case "п'ятниця":
      message = "це робочий день. бігом на роботу!";
      break;
    case "субота":
    case "неділя":
      message = "це вихідний.";
      break;
    default:
      message = "людство ще такого не знає";
  }
  document.getElementById("day-message").innerText = message;
}

//3

document.getElementById("btnSeason").addEventListener("click", function () {
  let inputSeason = Number(document.getElementById("inputSeason").value); // Отримуємо число
  const result = document.getElementById("result");

  switch (inputSeason) {
    case 12:
    case 1:
    case 2:
      result.textContent = "Зима";
      break;
    case 3:
    case 4:
    case 5:
      result.textContent = "Весна";
      break;
    case 6:
    case 7:
    case 8:
      result.textContent = "Літо";
      break;
    case 9:
    case 10:
    case 11:
      result.textContent = "Осінь";
      break;
    default:
      result.textContent = "Будь ласка, введіть число від 1 до 12.";
  }
});

//4

document.getElementById("btnMonth").addEventListener("click", function () {
  let inputMonth = Number(document.getElementById("inputMonth").value); // Отримуємо число
  const resultMonth = document.getElementById("resultMonth");

  switch (inputMonth) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      resultMonth.textContent = "У цьому місяці 31 день";
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      resultMonth.textContent = "У цьому місяці 30 днів";
      break;
    case 2:
      resultMonth.textContent =
        "У цьому місяці 28 днів.(29 днів у високосний рік)";
      break;
    default:
      resultMonth.textContent = "Будь ласка, введіть число від 1 до 12.";
  }
});

// 5

document.getElementById("check-color").addEventListener("click", function () {
  const color = document.getElementById("color-input").value.toLowerCase();
  const message = document.getElementById("color-message");

  switch (color) {
    case "червоний":
      message.textContent = "Стоп";
      break;
    case "зелений":
      message.textContent = "Йти";
      break;
    case "жовтий":
      message.textContent = "Чекати";
      break;
    default:
      message.textContent =
        "Невідомий колір. Введіть червоний, зелений або жовтий.";
  }
});

//6
document.getElementById("calculate").addEventListener("click", function () {
    const num1 = parseFloat(document.getElementById("number1").value); // Перше число
    const num2 = parseFloat(document.getElementById("number2").value); // Друге число
    const operation = document.getElementById("operation").value; // Вибрана операція
    const resultElement = document.getElementById("resultN");
    let resultN;
  
    // Перевірка на ділення на нуль
    if (operation === "/" && num2 === 0) {
      resultElement.textContent = "Помилка: ділення на нуль неможливе.";
      return;
    }
  
    // Виконання обраної операції
    switch (operation) {
      case "+":
        resultN = num1 + num2;
        break;
      case "-":
        resultN = num1 - num2;
        break;
      case "*":
        resultN = num1 * num2;
        break;
      case "/":
        resultN = num1 / num2;
        break;
      default:
        resultN = "Невідома операція.";
    }
  
    // Виведення результату
    resultElement.textContent = `Результат: ${resultN}`;
  });
  

