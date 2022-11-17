let slider = document.getElementById("font-size-control");
let text = document.getElementById("text");

slider.addEventListener("input", () => {
  let size = slider.value;
  text.style.fontSize = size + "px";
});
