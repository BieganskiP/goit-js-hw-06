function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let changeColorButton = document.querySelector("button");
let bodyBackgroundColor = document.querySelector("body");

changeColorButton.addEventListener("click", () => {
  let randomColor = getRandomHexColor();
  bodyBackgroundColor.style.backgroundColor = `${randomColor}`;
  document.querySelector(".color").textContent = `${randomColor}`;
});
