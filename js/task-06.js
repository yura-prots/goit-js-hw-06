const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", (e) => {
  const validLength = Number(validationInput.dataset.length);
  let stringLength = Number(e.currentTarget.value.length);

  if (stringLength === validLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
