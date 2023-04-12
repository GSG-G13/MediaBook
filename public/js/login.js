const btn = document.getElementById("btn");
const divMessage = document.getElementById('divmessage')

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
  }else{
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
      // const divMessage = document.getElementById("divmessage")
      if(data.error == true){
        const parMessage = document.createElement('p');
        parMessage.textContent = data.data.errors[0].message;
        divMessage.appendChild(parMessage);
      }else{
        window.alert('Login Successfully, Go TO Profile')
      }
    })
    .catch(err=> console.log(err));
  }
    const FormData = document.getElementById("formData")
    FormData.reset();
});
