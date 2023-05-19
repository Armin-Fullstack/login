const btnLogin = document.querySelector(".btn--login")
const formContainer = document.querySelector(".form-container")
const signInForm = formContainer.firstElementChild
const signUpForm = formContainer.lastElementChild

const signUpBtn = document.querySelector(".sign-up-btn")
const signInBtn = document.querySelector(".sign-in-btn")
function showLogin() {
  formContainer.style.opacity = "1"
}

function showSignUp() {
  signInForm.style.display = "none"
  signUpForm.classList.remove("hidden")
}
function showSignIn() {
  signUpForm.classList.add("hidden")
  signInForm.style.display = "flex"
}
btnLogin.addEventListener("click" , showLogin)
signUpBtn.addEventListener("click" , showSignUp)
signInBtn.addEventListener("click" , showSignIn)