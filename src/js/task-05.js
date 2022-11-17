let inputText = document.querySelector("#name-input");
let outputText = document.querySelector("#name-output");

const handleInput = () => {
  outputText.innerHTML = `${inputText.value}`;
};
const handleEmptyInput = () => {
  outputText.innerHTML = `Anonymous`;
};

inputText.addEventListener("input", () => {
  if (inputText.value == 0) {
    handleEmptyInput();
  } else {
    handleInput();
  }
});

