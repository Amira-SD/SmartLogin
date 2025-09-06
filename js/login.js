
let errorMessage        =document.getElementById('errorMsg');
errorMessage.innerHTML  = '';
const userEmail         = document.getElementById("loginEmail");
const userPassword      = document.getElementById("loginPassword");
const emailRegex        = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
const passwordRegex     = /^.{6,}$/; 
userEmail.addEventListener("input", () => validate(userEmail, emailRegex));
userPassword.addEventListener("input", () => validate(userPassword, passwordRegex));
function login() {
        const email      = userEmail.value;
        const password   = userPassword.value;
        if (!email || !password) {
            errorMessage.classList.add("text-danger");
            errorMessage.innerHTML="Please fill all fields";
            return;
        }
        const storedUser = JSON.parse(localStorage.getItem(email.toLowerCase()));//Get the object with email
        if (!storedUser) {
            errorMessage.classList.add("text-danger");
            errorMessage.innerHTML='Email User not found. Please signup.';
            return;
        }
        if (storedUser.password === password ) 
        {
            localStorage.setItem("currentLoginUser", JSON.stringify(storedUser));
             window.location.href = "home.html"; 
        }
        else 
            errorMessage.innerHTML='Incorrect password';
           
    }
    
