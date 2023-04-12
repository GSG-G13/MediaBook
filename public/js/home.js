// const plusButton = document.querySelector(".plus-button");
const userName = document.getElementById('name')

fetch("/posts")
  .then((data) => data.json())
  .then(data => data.reverse())
  .then(createPostElement)
  .catch(console.log);

fetch('/username')
  .then(data => data.json())
  .then(data => {
    const userName = `${data.firstname} ${data.surname}`
    return userName;
  }).then(username => {
    userName.textContent = username;
  })
  .catch(console.log);



