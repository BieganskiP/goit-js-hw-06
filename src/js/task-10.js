function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let initialSize = 20;

const divBoxes = document.getElementById("boxes");
const createButton = document.querySelector("[data-create]");
const deleteButton = document.querySelector("[data-destroy]");
const enteredValue = document.querySelector("input");

createButton.addEventListener("click", () => {
  for (let i = 0; i < enteredValue.value; i++) {
    const newDiv = document.createElement("div");
    divBoxes.appendChild(newDiv);
    initialSize += 10;
    newDiv.style.width = `${initialSize}px`;
    newDiv.style.height = `${initialSize}px`;
    newDiv.style.backgroundColor = `${getRandomHexColor()}`;
  }
});

deleteButton.addEventListener("click", () => {
  divBoxes.innerHTML = "";
  initialSize = 20;
});
