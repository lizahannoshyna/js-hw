// 1
const gallery = document.querySelectorAll('.image');
let position = 0;

document.addEventListener('keydown', (e) => {
  if(e.key === 'ArrowRight'){
    position -= 10;
    gallery.forEach(image => {
      image.style.transform = `translateX(${position}px)`;
    });
  }
  else if(e.key === 'ArrowLeft'){
    position += 10;
    gallery.forEach(image => {
      image.style.transform = `translateX(${position}px)`;
    });
  }
})

// 2
const divInput =  document.querySelector('.div-input');
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxesContainer = document.querySelector('#boxes');

renderBtn.addEventListener('click', () => {
  const amount = Number(divInput.value);
  createBoxes(amount);
});
destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});

function createBoxes(amount) {
  for (let i = 0; i< amount; i++){
    let boxEl = document.createElement('div');
    boxEl.style.backgroundColor = getRandomRGB();
    boxEl.style.width = "30px";
    boxEl.style.height = "30px";
    boxesContainer.appendChild(boxEl);
  }
};

function destroyBoxes(){
  boxesContainer.innerHTML = '';
};

function getRandomRGB(){
  const rgb = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  return rgb;
};
























































































