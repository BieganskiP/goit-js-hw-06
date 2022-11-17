let counterDisplay = document.querySelector("#value");

let decrementCounter = document.querySelector('[data-action="decrement"]');
let incrementCounter = document.querySelector('[data-action="increment"]');

let counterValue = 0;

updateDisplay();

incrementCounter.addEventListener("click", () => {
  counterValue++;
  updateDisplay();
});

decrementCounter.addEventListener("click", () => {
  counterValue--;
  updateDisplay();
});

function updateDisplay() {
  counterDisplay.innerHTML = counterValue;
}
