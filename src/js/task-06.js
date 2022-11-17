let inputForm = document.getElementById("validation-input");
let attributeValue = inputForm.getAttribute("data-length");

let validInput = () => {
  inputForm.classList.add("valid");
  inputForm.classList.remove("invalid");
};
let invalidInput = () => {
  inputForm.classList.add("invalid");
  inputForm.classList.remove("valid");
};
inputForm.addEventListener("blur", () => {
  if (attributeValue == inputForm.value.trim().length) {
    validInput();
  } else {
    invalidInput();
  }
});
