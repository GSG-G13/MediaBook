const btn = document.getElementById("btn");
const divMessage = document.getElementById('divMessage')
const homeBtn = document.getElementById('home')
// homeBtn.addEventListener('click', () => {
//   window.location.href = "/profile.html";
// })
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
  } else {
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
        return data;
      })
      .then((data) => {

        if (data.error == true) {
          const paragraph = document.createElement('p');
          paragraph.className = "paragraph"
          paragraph.textContent = data.data.errors[0].message;
          divMessage.appendChild(paragraph);
        }
      })
      .catch(err => console.log(err));
  }
  const formData = document.getElementById("formData")
  formData.reset();
});
