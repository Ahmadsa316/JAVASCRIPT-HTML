
const targetElement = document.getElementById("target");

const firstItem = document.createElement("li");
firstItem.textContent = "First item";

const secondItem = document.createElement("li");
secondItem.textContent = "Second item";

secondItem.classList.add("my-item");

const thirdItem = document.createElement("li");
thirdItem.textContent = "Third item";


targetElement.appendChild(firstItem);
targetElement.appendChild(secondItem);
targetElement.appendChild(thirdItem);