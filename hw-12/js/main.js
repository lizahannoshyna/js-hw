//  1
console.log('task one')
const user = {
    name: '',
    age: '',
    mood: '',
    hobby: '',
    premium: ''
}

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = 'false';

for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`)
}

// 2
function countProps(obj) {
    return Object.keys(obj).length;
}

console.log(countProps(user));

//
console.log(' task 3 & 4')
const employees = {
    mango: '3',
    berry: '6',
    peach: '4',
    coco: '5'
}

function findBestEmployee() {
    let bestEmployee = null;
    let maxTasks = 0;

    for (const entry of Object.entries(employees)) {
        const employee = entry[0];
        const tasks = Number(entry[1]);

        if (tasks > maxTasks) {
            maxTasks  = tasks;
            bestEmployee = employee ;
        }
    }
    return bestEmployee;
}

console.log(`employee of the month : ${findBestEmployee(employees)}`);

// task 4

const salary = {
    mango:'30',
    berry: '60',
    peach: '40',
    coco: '50'
}
function countTotalSalary(employees){
    let totalS = 0;
    for(const salary of Object.values(employees)){
        totalS += Number(salary);
    }
    return totalS;
}
console.log(countTotalSalary(salary))

// task 5

const products = [
    { name: 'Apple', price: 30, quantity: 10 },
    { name: 'Banana', price: 10, quantity: 5 },
    { name: 'Tomato', price: 20, quantity: 8 }
  ];

  function getAllPropValues(arr, prop){
    let productCart = [];
    for(const obj of arr){
        if(prop in obj){
            productCart.push(obj[prop])
        }
    }
    return productCart;
  }

  console.log(getAllPropValues(products, 'name'));


//task 6

function calculateTotalPrice(allProdcuts, productName) {
    let totalPrice = 0;
    for(const product of allProdcuts){
        if(product.name === productName ){
            totalPrice = product.price * product.quantity
        }
    }
    return totalPrice;
}

console.log(calculateTotalPrice(products, 'Apple'));

