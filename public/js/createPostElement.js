

const createPostElement = (data) => {
    document.querySelector(".posts").textContent = ''
    data.forEach((element) => {
      const postDiv = document.createElement("div");
      postDiv.classList.add("post");
  
      const postTopDiv = document.createElement("div");
      postTopDiv.classList.add("post-top");
  
      const dpDiv = document.createElement("div");
      dpDiv.classList.add("dp");
  
      const img = document.createElement("img");
      img.src = "../images/girl.jpg";
      img.alt = "";
  
      dpDiv.appendChild(img);
  
      const postInfoDiv = document.createElement("div");
      postInfoDiv.classList.add("post-info");
  
      const nameP = document.createElement("p");
      nameP.classList.add("name");
      nameP.textContent = `${element.firstname} ${element.surname}`;
  
      const timeSpan = document.createElement("span");
      timeSpan.classList.add("time");
      timeSpan.textContent = "12 hrs ago";
  
      postInfoDiv.appendChild(nameP);
      postInfoDiv.appendChild(timeSpan);
  
      const ellipsisI = document.createElement("i");
      ellipsisI.classList.add("fas", "fa-ellipsis-h");
  
      postTopDiv.appendChild(dpDiv);
      postTopDiv.appendChild(postInfoDiv);
      postTopDiv.appendChild(ellipsisI);
  
      const postContentDiv = document.createElement("div");
      postContentDiv.classList.add("post-content");
      postContentDiv.textContent = element.content;
  
      const imgDiv = document.createElement("div");
      const postImg = document.createElement("img");
      postImg.src = element.image_url;
      imgDiv.classList.add("imgDev");
      postImg.classList.add("postImg");
      imgDiv.appendChild(postImg);
      // create the div element with class "post-bottom"
      const postBottomDiv = document.createElement("div");
      postBottomDiv.classList.add("post-bottom");
  
      const likeDiv = document.createElement("div");
      likeDiv.classList.add("action");
      const likeIcon = document.createElement("i");
      likeIcon.classList.add("far", "fa-thumbs-up");
      const likeSpan = document.createElement("span");
      likeSpan.textContent = "Like";
      likeDiv.appendChild(likeIcon);
      likeDiv.appendChild(likeSpan);
  
      const commentDiv = document.createElement("div");
      commentDiv.classList.add("action");
      const commentIcon = document.createElement("i");
      commentIcon.classList.add("far", "fa-comment");
      const commentSpan = document.createElement("span");
      commentSpan.textContent = "Comment";
      commentDiv.appendChild(commentIcon);
      commentDiv.appendChild(commentSpan);
  
      const shareDiv = document.createElement("div");
      shareDiv.classList.add("action");
      const shareIcon = document.createElement("i");
      shareIcon.classList.add("fa", "fa-share");
      const shareSpan = document.createElement("span");
      shareSpan.textContent = "Share";
      shareDiv.appendChild(shareIcon);
      shareDiv.appendChild(shareSpan);
  
      postBottomDiv.appendChild(likeDiv);
      postBottomDiv.appendChild(commentDiv);
      postBottomDiv.appendChild(shareDiv);
  
      postDiv.appendChild(postTopDiv);
      postDiv.appendChild(postContentDiv);
      if (element.content.trim() !== "") {
        postDiv.appendChild(imgDiv);
      }
      document.querySelector(".posts").append(postDiv);
    });
  }