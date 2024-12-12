// task 1
document.getElementById('btn').addEventListener('click', () => {
    const firstField = parseFloat(document.getElementById('first-field_number').value) || 0;
    const secondField = parseFloat(document.getElementById('second-field_number').value) || 0;
    const message = document.getElementById('message');

    message.textContent = (firstField && secondField) 
        ? "Обидва поля заповнені" 
        : "Не всі поля заповнені";

// task 2
    if (firstField + secondField > 10) {
        alert('Сума більша за 10');
    } else {
        alert('Сума менша або дорівнює 10');
    }
});

// task 3
document.getElementById('btn_text').addEventListener('click', () => {
    const firstText = document.getElementById('field_text').value;
    if(firstText.includes ('JavaScript') ){
        alert('Текст містить слово JavaScript')
    }
    else{
        alert('Текст не містить слово JavaScript')
    }
    })

// task 4
document.getElementById('btn-third').addEventListener('click', () => {
    const thirdFieald = parseFloat(document.getElementById('third-field_number').value);
    if ( thirdFieald > 10 && thirdFieald < 20){
        alert('Число входить в діапазон від 10 до 20');
    }
    else {
        alert('Число не входить в діапазон від 10 до 20');
    }
});

// task 5

document.getElementById('button').addEventListener('click', () => {
    const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (name.length < 3) {
            alert("Ім'я повинно містити не менше 3 символів");
            return;
        }
        if (!email.includes('@') && !email.includes('.')) {
            alert("Email повинен містити символ '@' та крапку");
            return;
        }
        if (password.length < 6) {
            alert("Пароль повинен містити не менше 6 символів");
            return;
        }

        })