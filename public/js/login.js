const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("email");
  const password = document.getElementById("pass");
  if (email.value.length < 3 || email.value.length > 80) {
    window.alert(
      "email must be at least 3 characters and less than 40 characters long "
    );
    return;
  } else if (
    password.value.length < 8 ||
    password.value.length > 80
  ) {
    window.alert(
      "password must be at least 8 characters and less than 40 characters long "
    );
    return;
  }
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  })
    .then((data) => data.json())
    .then((data) => {
      const divmessage = document.getElementById("divmessage")
      if(data.errors == true){
        const parmessage = document.createElement('p');
        parmessage.textContent = data.message;
        divmessage.appendChild(parmessage);
      }else{
        window.alert('Login Successfully, Go TO Profile')
      }
    })
    .catch(err=> console.log(err));
    const FormData = document.getElementById("form_data")
    FormData.reset();
});
