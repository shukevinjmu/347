captchaVerify = document.getElementById("captcha-verify");
submit = document.getElementById("submit");



submit.addEventListener('click', () =>{
    if(grecaptcha.getResponse() === '') {
        captchaVerify.innerHTML = "Congratulations! you are not a robot.";
    }
} )