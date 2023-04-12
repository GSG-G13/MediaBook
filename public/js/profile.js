const userName = document.getElementById('userName')


fetch('/username')
  .then(data => data.json())
  .then(data => {
    const userName = `${data.firstname} ${data.surname}`
    return userName;
  }).then(username => {
    userName.textContent = username;
  })
  .catch(console.log);
  
  fetch('/userPosts',{
    method: 'GET'
  })
    .then(data => data.json())
    .then(data => data.reverse())
    .then(createPostElement)

    