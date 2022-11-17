const elementsCount = document.querySelectorAll(".item ul");
const sectionHeader = document.querySelectorAll(".item > h2");
console.log("Number of categories: " + sectionHeader.length);
for (let index = 0; index < elementsCount.length; index++) {
  const element = elementsCount[index];
  const headerElement = sectionHeader[index];
  console.log("Category: " + headerElement.textContent);
  console.log("Elements: " + element.childElementCount);
}
