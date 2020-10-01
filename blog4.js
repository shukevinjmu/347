captchaVerify = document.getElementById("captcha-verify");

if(grecaptcha.getResponse() ==  "success") {
    captchaVerify.innerHTML = "Congratulations! you are not a robot.";
}