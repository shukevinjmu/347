captchaVerify = document.getElementById("captcha-verify");

if(grecaptcha.getResponse() != 0) {
    captchaVerify.innerHTML = "Congratulations! you are not a robot.";
    alert("This is doing something");
}