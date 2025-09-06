    // DOM Elements
    var userName            = document.getElementById("username");
    var userPassword        = document.getElementById("password");
    var userEmail           = document.getElementById("email");
    let errorMessage        = document.getElementById('errorMsg');
    errorMessage.innerHTML  = '';
    var userData            = [];
    const emailRegex        = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    const passwordRegex     = /^.{6,}$/; 
    userEmail.addEventListener("input", () => validate(email, emailRegex));
    userPassword.addEventListener("input", () => validate(password, passwordRegex));
    function submit(){
        let email      = userEmail.value;
        let password   = userPassword.value;
        let username   = userName.value;
        if (!email || !password ||!username) {
            errorMessage.classList.add("text-danger");
            errorMessage.innerHTML="Please fill all fields";
            return;
        }
         // Check if user already exists
        if (localStorage.getItem(email.toLowerCase())) {
            errorMessage.classList.add("text-danger");
            errorMessage.innerHTML='User already exists. Please login.';
            return;
        }
         // Save user in localStorage as object
        const user = { username, email, password };
        localStorage.setItem(email.toLowerCase(), JSON.stringify(user)); // Key is the email address
        showPopup('Signup successful! You can now login.', "Success","success");
        setTimeout(function() {
        window.location.href = "index.html"; 
      }, 3000);
    }
  

