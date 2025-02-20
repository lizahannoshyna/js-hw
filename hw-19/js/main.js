// 1
const body = document.body;
const openBtn = document.querySelector("[data-action='open-modal']");
const closeBtn = document.querySelector("[data-action='close-modal']");
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");


function openModal() {
  body.classList.add("show-modal");
}
function closeModal() {
  body.classList.remove("show-modal");
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

// 2
backdrop.addEventListener("click", (event) => {
  if (event.target === backdrop) {
    closeModal();
  }
});

// 3
const radioButtons = document.querySelectorAll('input[name="color"]');

radioButtons.forEach((radio) => {
  radio.addEventListener("change", (event) => {
    document.body.style.backgroundColor = event.target.value;
  });
});
// 4
const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  span.textContent = event.target.value;
  if (event.target.value === "") {
    span.textContent = "незнайомець";
  }
});

const validationInput = document.querySelector("#validation-input");
validationInput.addEventListener("blur", (event) => {
  if (event.target.value.length === Number(validationInput.dataset.length)) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});

// 5
const inputRange = document.querySelector('#font-size-control');
const spanText = document.querySelector("#text");

inputRange.addEventListener('input', (event) => {
  spanText.style.fontSize = `${event.target.value}px`;
  // console.log(spanText.style.fontSize);
})










