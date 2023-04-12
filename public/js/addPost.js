const plusButton = document.querySelector(".plus-button");
const postContent = document.querySelector(".posts");
const imgBtn = document.getElementById('imgBtn');
const addImg = document.getElementById('addImg');
const addPost = document.getElementById('addPost');
imgBtn.addEventListener('click', ()=>{
  addImg.style.display = "block"
})
plusButton.addEventListener("click",(e)=>{
  if(addPost.value == '') {
    return;}else{

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
          image_url: addImg.value,
        }),
      })
      .then(data => data.json())
      .then(() => {
        location.reload()
        addImg.style.display = "none"
      }
        )
      .catch(err =>console.log(err))
    }
    })
    addImg.style.display = "none"