const btnLogin = document.querySelector(".btn--login")
const formContainer = document.querySelector(".form-container")
function showLogin() {
  formContainer.style.opacity = "1"
}
btnLogin.addEventListener("click" , showLogin)