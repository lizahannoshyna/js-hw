// task 1
document.getElementById("top-up-acct").addEventListener("click", () => {
  let amount = parseFloat(prompt("Введіть суму для поповнення:"));
  bankAccount.deposit(amount);
});

document.getElementById("get-cash").addEventListener("click", () => {
  let amount = parseFloat(prompt("Введіть суму для зняття:"));
  bankAccount.withdraw(amount);
});

const bankAccount = {
  ownerName: "Mango",
  accountNumber: 1234567,
  balance: 100,
  deposit: function (amount) {
    if (this.balance < amount) {
        console.log("Сума поповнення повинна бути більше 0.");
        return;
      }
    this.balance += amount;
    console.log(
      `Баланс поповнено на ${amount}. Поточний баланс: ${this.balance}`
    );
  },
  withdraw: function (amount) {
    if (amount > this.balance) {
      console.log("Недостатньо коштів на рахунку.");
      return;
    }
    this.balance -= amount;
    console.log(`Ви зняли ${amount}. Поточний баланс: ${this.balance}`);
  },
};

// task 2
document.getElementById("check-temperature").addEventListener("click", () => {
  weather.checkTemperature();
})

const weather = {
    temperature:"",
    humidity:"",
    windSpeed:"",
    checkTemperature: function () {
      this.temperature = parseFloat(document.getElementById("input-temperature").value);
      this.result();
    },
  
    result: function () {
      if (this.temperature < 0) {
        alert("Температура нижче 0 градусів Цельсія");
      } else {
        alert("Температура вище або рівна 0 градусів Цельсія");
      }
    }
}


// task 3
document.getElementById("login-button").addEventListener("click", () => {
  user.userProperties();
  const inputEmail = document.getElementById("user-email").value;
  const inputPassword = document.getElementById("user-password").value;
  if(user.login(inputEmail, inputPassword)){
    alert(`Вітаємо, ${user.name} !`);
}else{
  alert("Невірний email або пароль");
}
})

const user = {
  name: "",
  email: "",
  password: "",
  userProperties: function(){
    this.name = document.getElementById("user-name").value;
    this.email = document.getElementById("user-email").value;
    this.password = document.getElementById("user-password").value;
  },
  login: function (inputEmail, inputPassword){
    return this.email === inputEmail && this.password === inputPassword;
  }
}

// task 4

const movie = {
  title: 'The Lord of the Rings: The Return of the King',
  director: 'Peter Jackson',
  year: '2003',
  rating:'9',
  isHighlyRated: function (){
    return this.rating > 8;
  }
}

const movieTitle = document.getElementById("movieTitle");
const movieDirector = document.getElementById("movieDirector");
const movieYear = document.getElementById("movieYear");
const movieRating = document.getElementById("movieRating");

movieTitle.textContent = ` Title: ${movie.title}`;
movieDirector.textContent = `Director: ${movie.director}`;
movieYear.textContent = `Year: ${movie.year}`;
movieRating.textContent = `Rating: ${movie.rating}`;

if(movie.isHighlyRated()){
  movieTitle.style.color = 'green';
}else{
  movieTitle.style.color = 'red';
}