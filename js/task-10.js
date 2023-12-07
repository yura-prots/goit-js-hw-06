function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const parentBox = document.getElementById("boxes");
const numberOfEl = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

function createBoxes(amount) {
  const elementsArray = [];
  let boxSize = 30;

  for (let i = 0; i < amount; i++) {
    boxSize += 10;

    const divEl = document.createElement("div");
    divEl.style.width = `${boxSize}px`;
    divEl.style.height = `${boxSize}px`;
    divEl.style.backgroundColor = getRandomHexColor();

    elementsArray.push(divEl);
  }

  return parentBox.append(...elementsArray);
}

createBtn.addEventListener("click", () => {
  createBoxes(numberOfEl.value);
});

destroyBtn.addEventListener("click", () => {
  parentBox.innerHTML = "";
});
