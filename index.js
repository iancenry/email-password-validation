const form  = document.querySelector("form"),
    emailField  = form.querySelector(".email-field"),
    emailInput  = emailField.querySelector(".email"),
    passwordField  = form.querySelector(".create-password"),
    passwordInput  = passwordField.querySelector(".password"),
    confirmPasswordField  = form.querySelector(".confirm-password"),
    confirmPasswordInput  = confirmPasswordField.querySelector(".confirmPassword");

//email validation -- add invalid class if email doesn't match the pattern
function checkEmail(){
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    if(!emailInput.value.match(emailPattern)){
        return emailField.classList.add("invalid");
    }
    emailField.classList.remove("invalid");
}

//reveal and hide password
const eyeIcons = document.querySelectorAll(".show-hide");

eyeIcons.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", ()=>{
        //getting parent element of the eye icon and selecting the password input
        const  passInput = eyeIcon.parentElement.querySelector("input");
        if(passInput.type === "password"){
            eyeIcon.setAttribute("src", `images/eye.svg`);
            return passInput.type = "text";
        }
        eyeIcon.setAttribute("src", `images/eye-slash.svg`);
        passInput.type = "password";
    });
})

//password validation
function checkPass(){
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if(!passwordInput.value.match(passPattern)){
        return passwordField.classList.add("invalid");
    }
    passwordField.classList.remove("invalid");
}

//confirm password validation
function confirmPass(){
    if(passwordInput.value !== confirmPasswordInput.value ){
        return confirmPasswordField.classList.add("invalid")
    }
    confirmPasswordField.classList.remove("invalid")
}

// handle form submission
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    checkEmail();
    checkPass();
    confirmPass();

    //call function on key up
    emailInput.addEventListener("keyup", checkEmail);
    passwordInput.addEventListener("keyup", checkPass);
    confirmPasswordInput.addEventListener("keyup", confirmPass);

    if(!emailField.classList.contains("invalid") && !passwordField.classList.contains("invalid") && !confirmPasswordField.classList.contains("invalid")){
        location.href = form.getAttribute("action");
    }
})