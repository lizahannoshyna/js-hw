// змінити текст на кнопці на значення текстового поля

document.getElementById('btn-1').addEventListener("click", function(){
    const firstInput = document.getElementById('input-1').value ;
    if(firstInput.trim() !== ""){
        this.textContent = firstInput;
    } else {
        alert('Enter your text in the form');
    }
});

// змінити значення атрибута "src" на шлях до іншого зображення

document.querySelector('.btn-img-change').addEventListener('click', function(){
    const img = document.querySelector('.img-change');
    const newSrc = img.src.includes("catWithRedScarf.jpg") ? './img/rabbitWithGreenScarf.jpg': "./img/catWithRedScarf.jpg";
    img.src = newSrc;
});

// змінити значення атрибута "href" та додати новий атрибут "alt"

const link = document.querySelector('.link-3');
link.href = 'https://uk.duolingo.com/course/en/uk/%D0%92%D0%B8%D0%B2%D1%87%D0%B0%D0%B9%D1%82%D0%B5-%D0%B0%D0%BD%D0%B3%D0%BB%D1%96%D0%B9%D1%81%D1%8C%D0%BA%D1%83';

const logo = document.querySelector('.netflix-logo');
logo.setAttribute('alt', 'duolingo is watching you')

// змінити вміст першого елемента списку на новий текст

const firstListItem = document.querySelector('.list li');
firstListItem.textContent = 'Hello world !';
firstListItem.style.color = 'green';





