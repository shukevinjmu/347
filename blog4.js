captchaVerify = document.getElementById("captcha-verify");
submit = document.getElementById("submit");



submit.addEventListener('click', () =>{
    if(grecaptcha.getResponse() != 0) {
        captchaVerify.innerHTML = "Congratulations! you are not a robot.";
        alert("This is doing something");
    }
} )