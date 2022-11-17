let size = document.getElementById("font-size-control").value;
let text = document.getElementById("text");

slider.addEventListener("input", () => (text.style.fontSize = size + "px"));
