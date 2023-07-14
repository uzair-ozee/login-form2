const closebtn = document.getElementById("Close");
const signupclosebtn = document.getElementById("Signup__Close");
const main__div = document.querySelector(".main__div");
const signup_form = document.querySelector(".signup_form");
const closemain__div = document.getElementById("Close")

function closeFunction() {
    main__div.style.display = "none";
}

function signupCloseFunction() {
    signup_form.style.display = "none";
    main__div.style.display = "flex";
}

function showSignupForm(event) {
    event.preventDefault();
    signup_form.style.display = "flex";
    main__div.style.display = "none";
}

function showSigninForm(event) {
    event.preventDefault();
    signup_form.style.display = "none";
    main__div.style.display = "flex";
}

function CloseMainForm() {
    main__div.style.display = "none"
}

closebtn.addEventListener("click", closeFunction);
signupclosebtn.addEventListener("click", signupCloseFunction);
closemain__div.addEventListener("click", CloseMainForm)