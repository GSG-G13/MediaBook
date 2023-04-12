const plusButton = document.querySelector(".plus-button");
const postContent = document.querySelector(".posts");

plusButton.addEventListener("click",(e)=>{
    e.preventDefault();
    const addPost = document.getElementById("addPost");
    const showPost = document.createElement("p");
    showPost.className = "post";
    showPost.textContent =addPost.value;
    postContent.appendChild(showPost);
    
    fetch("/addPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: addPost.value,
        }),
      })
      .then(data => data.json())
      .catch(err =>console.log(err))
})