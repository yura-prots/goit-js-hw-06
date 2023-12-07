const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", (e) => {
  const validLength = validationInput.dataset.length;
  let stringLength = e.target.value.length;

  if (stringLength < validLength) {
    validationInput.classList.add("invalid");
  } else if (stringLength >= validLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  }
});
