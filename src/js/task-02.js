const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
ingredients.forEach((element) => {
  const listItem = document.createElement("li");
  listItem.textContent = element;
  list.append(listItem);
});
