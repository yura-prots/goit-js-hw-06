function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const spanEl = bodyEl.querySelector(".color");
const buttonEl = bodyEl.querySelector(".change-color");

buttonEl.addEventListener("click", () => {
  let randomColor = getRandomHexColor();

  bodyEl.style.backgroundColor = randomColor;
  spanEl.textContent = `- ${randomColor}`;
});
