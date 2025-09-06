const user              = JSON.parse(localStorage.getItem("currentLoginUser"));
const username          = user.username;
const logoutBtn         = document.getElementById("logout-btn");
const confirmLogoutBtn  = document.getElementById("confirm-logout");
const logoutModal       = new bootstrap.Modal(document.getElementById("logoutModal"));
    if(username)
    {
    document.getElementById("welcome-text").textContent = "Welcome " + username;
     document.getElementById("wellcomeusername").innerHTML="Hi " + username;
    }
    else
        window.location.href = "index.html";

logoutBtn.addEventListener("click", () => {
  logoutModal.show();
});
confirmLogoutBtn.addEventListener("click", () => {
  localStorage.removeItem("currentLoginUser");
  window.location.href = "index.html";
});
