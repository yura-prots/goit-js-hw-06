let counterValue = 0;

const resultValue = document.querySelector("#value");

const counter = document.querySelector("#counter");

counter.addEventListener("click", (e) => {
  if (e.target.dataset.action === "increment") {
    counterValue += 1;
    resultValue.textContent = counterValue;
  } else if (e.target.dataset.action === "decrement") {
    counterValue -= 1;
    resultValue.textContent = counterValue;
  }
});
