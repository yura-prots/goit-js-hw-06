const nameInput = document.getElementById("name-input");

const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", (e) => {
  if (!e.currentTarget.value) {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = e.currentTarget.value;
  }
});
