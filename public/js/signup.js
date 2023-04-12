const form = document.getElementById("signupForm");
const firstnameInput = document.getElementById("firstnameInput");
const surnameInput = document.getElementById("surnameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const dateInput = document.getElementById("dateInput");
const gender = document.getElementById("gender");
const signInBtn = document.getElementById("signUpSubmit");


signInBtn.addEventListener("click", () => {
  if (firstnameInput.value.length < 3 || firstnameInput.value.length > 40) {
    window.alert(
      "First name must be at least 3 characters and less than 40 characters long "
    );
    return;
  } else if (surnameInput.value.length < 3 || surnameInput.value.length > 40) {
    window.alert(
      "surname must be at least 3 characters and less than 40 characters long "
    );
    return;
  } else if (emailInput.value.length < 3 || emailInput.value.length > 80) {
    window.alert(
      "email must be at least 3 characters and less than 40 characters long "
    );
    return;
  } else if (
    passwordInput.value.length < 8 ||
    passwordInput.value.length > 80
  ) {
    window.alert(
      "password must be at least 8 characters and less than 40 characters long "
    );
    return;
  }
  const body = {
    firstname: firstnameInput.value,
    surname: surnameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
    date: dateInput.value,
    gender: gender.value,
  };

  fetch("/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then((data) => data.json())
    .then((result) => {
      if (result.error == true) {
        window.alert(result.massage);
      } else {
        window.alert('create account successfully, login to your account')
      }
      firstnameInput.value = ''
      surnameInput.value = ''
      emailInput.value = ''
      passwordInput.value = ''
      dateInput.value = ''
      gender.value = ''
    })
    .catch(err => {
      window.alert(err)
    })
});
