//  1
console.log("task 1");
const user = {
  name: "Kiwi",
  age: "25",
  mood: "excited",
  hobby: "composing music",
  premium: "true",
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = "false";

for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}

// 2
console.log(" task 2");
function countProps(obj) {
  return Object.keys(obj).length;
}

console.log(countProps(user));

// task 3
console.log(" task 3");
const employees = {
  mango: "3",
  berry: "6",
  peach: "4",
  coco: "5",
};

function findBestEmployee() {
  let bestEmployee = null;
  let maxTasks = 0;

  for (const [employee, taskStr] of Object.entries(employees)) {
    const tasks = Number(taskStr);

    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestEmployee = employee;
    }
  }
  return bestEmployee;
}

console.log(`employee of the month : ${findBestEmployee(employees)}`);

// task 4
console.log(" task 4");
const salary = {
  mango: "30",
  berry: "60",
  peach: "40",
  coco: "50",
};
function countTotalSalary(employees) {
  let totalS = 0;
  for (const salary of Object.values(employees)) {
    totalS += Number(salary);
  }
  return totalS;
}
console.log(countTotalSalary(salary));

// task 5
console.log("task 5");
const products = [
  { name: "Apple", price: 30, quantity: 10 },
  { name: "Banana", price: 10, quantity: 5 },
  { name: "Tomato", price: 20, quantity: 8 },
];

function getAllPropValues(arr, prop) {
  let productCart = [];
  for (const obj of arr) {
    const { [prop]: value } = obj;
    if (value !== undefined) {
      productCart.push(value);
    }
  }
  return productCart;
}

console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "price"));
console.log(getAllPropValues(products, "quantity"));

//task 6
console.log("task 6");
function calculateTotalPrice(allProdcuts, productName) {
  let totalPrice = 0;
  for (const { name, price, quantity } of allProdcuts) {
    if (name === productName) {
      totalPrice = price * quantity;
    }
  }
  return totalPrice;
}

console.log(calculateTotalPrice(products, "Apple"));

// task 7
document.getElementById("top-up-acct").addEventListener("click", () => {
  let amount = parseFloat(prompt("Введіть суму для поповнення:"));
  account.deposit(amount);
});

const account = {
  ownerName: "Mango",
  accountNumber: 1234567,
  balance: 100,
  transaction: [],
  deposit: function (amount) {
    if (amount <= 0) {
      console.log("Сума для поповнення має  бути більшою за 0");
      return
    }
    this.balance += amount;
    console.log(
      `Баланс поповнено на ${amount}. Поточний баланс: ${this.balance}`
    );
    this.method({
      amount,
      type: "deposit",
      description: `Внесення на суму ${amount}`,
    });
  },
  method: function ({ amount, type, description }) {
    this.transaction.push({
      date: new Date().toDateString(),
      amount,
      type,
      description
    })
    console.log(this.transaction);
  }
};
