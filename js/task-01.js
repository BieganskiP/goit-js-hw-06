let listItems = document.querySelectorAll("#categories > li.item");
console.log("Number of categories: " + listItems.length);
listItems.forEach((element) => {
  console.log("Category: " + element.querySelector("h2").innerText);
  console.log("Elements: " + element.querySelectorAll("li").length);
});




