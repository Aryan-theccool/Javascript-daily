let email=document.querySelector("#email");
let password=document.querySelector("#password");
let form=document.querySelector("#loginForm");
form.addEventListener("submit",function(e){
    e.preventDefault();
    console.log(email.value);
    console.log(password.value);
    const emailregex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailans=emailregex.test(email.value);
    let passwordans=passwordregex.test(password.value);
    if(!emailans){
        document.querySelector("#emailError").textContent="Please enter a valid email";
    }
    if(!passwordans){
        document.querySelector("#passwordError").textContent="Please enter a valid password";
    }
})