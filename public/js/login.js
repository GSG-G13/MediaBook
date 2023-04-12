const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("email");
  const password = document.getElementById("pass");

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
    .then(data => {
      if (data.message === "Success") {
        window.location.href = "/home";
      }
    })
    .catch((err) => {
      console.log(err, "Fronttt");
      // errores.forEach(element => {

      // });
    });
});
