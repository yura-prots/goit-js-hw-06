const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const { email, password } = e.currentTarget.elements;

  if (!email.value || !password.value) {
    alert("Всі поля повинні бути заповнені!");
  } else {
    const data = {
      email: email.value,
      password: password.value,
    };
    console.log(data);

    loginForm.reset();
  }
});
