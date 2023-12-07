const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", (e) => {
  const validLength = validationInput.dataset.length;
  let stringLength = e.currentTarget.value.length;

  if (stringLength < validLength) {
    validationInput.classList.add("invalid");
  } else if (stringLength >= validLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  }
});
