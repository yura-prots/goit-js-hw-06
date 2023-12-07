const nameInput = document.getElementById("name-input");

const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", (e) => {
  nameOutput.textContent = e.currentTarget.value;
});
