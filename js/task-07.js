const rangeInput = document.getElementById("font-size-control");
const textOutput = document.getElementById("text");

rangeInput.addEventListener("input", (e) => {
  textOutput.style.fontSize = `${e.target.value}px`;
});
