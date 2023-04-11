const btn = document.getElementById("btn");

btn.addEventListener("click", (e)=>{
    e.preventDefault();
    const email = document.getElementById("email");
    const password = document.getElementById("pass");
    
    fetch("/login", {
        method: "POST" ,
        headers:{
            "Content-Type":"application/json"
            },
        body : JSON.stringify({
            email :email.value ,
            password :password.value
        })
    })
    .then(data => data.json())
    .catch(err => console.log(err))
})