captchaVerify = document.getElementById("captcha-verify");

if(grecaptcha.getResponse().length > 0) {
    captchaVerify.innerHTML = "Congratulations! you are not a robot.";
}