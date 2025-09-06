const usersTable        = document.querySelector("#usersTable tbody");
const user              = JSON.parse(localStorage.getItem("currentLoginUser"));
const logoutBtn         = document.getElementById("logout-btn");
const confirmLogoutBtn  = document.getElementById("confirm-logout");
const logoutModal       = new bootstrap.Modal(document.getElementById("logoutModal"));
const username          = user.username;
let editEmailKey        = "";
let deleteKey           = "";      
let deleteUsername      = "";  
    function displayUsers() {
      usersTable.innerHTML = "";
      for (let i = 0; i < localStorage.length; i++) {
        const key   = localStorage.key(i);// Email
        const user  = JSON.parse(localStorage.getItem(key));
        const row   = document.createElement("tr");
        row.innerHTML = `
          <td>${user.username}</td>
          <td>${user.email}</td>
          <td>${user.password}</td>
          <td>
            <button class="btn btn-sm btn-warning editBtn">Edit</button>
            <button class="btn btn-sm btn-danger deleteBtn">Delete</button>
          </td>
        `;
        usersTable.appendChild(row);
        row.querySelector(".editBtn").addEventListener("click", () => {
          editEmailKey = key;
          document.getElementById("editUsername").value = user.username;
          document.getElementById("editEmail").value = user.email;
          document.getElementById("editPassword").value = user.password;
          const editModal = new bootstrap.Modal(document.getElementById("editModal"));
          editModal.show();
        });
        row.querySelector(".deleteBtn").addEventListener("click", () => {
        deleteKey = key;
        deleteUsername = user.username;
        document.getElementById("deleteMessage").textContent = `Are you Sure You want to delete ${deleteUsername}?`;
        const deleteModal = new bootstrap.Modal(document.getElementById("deleteModal"));
        deleteModal.show();
        });
      }
    }
    document.getElementById("confirmDeleteBtn").addEventListener("click", () => {
    localStorage.removeItem(deleteKey);
    displayUsers();
    showAlert(` The User  : ${deleteUsername} Deleted `, "danger");
    bootstrap.Modal.getInstance(document.getElementById("deleteModal")).hide();
});
    document.getElementById("editForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const updatedUser = {
        username: document.getElementById("editUsername").value,
        email: document.getElementById("editEmail").value,
        password: document.getElementById("editPassword").value
      };
      localStorage.setItem(editEmailKey, JSON.stringify(updatedUser));
      displayUsers();
      showAlert("User updated successfully!", "success");
      bootstrap.Modal.getInstance(document.getElementById("editModal")).hide();
    });

    function showAlert(message, type) {
      const alertBox = document.createElement("div");
      alertBox.className = `alert alert-${type} alert-dismissible fade show position-fixed top-0 end-0 m-3`;
      alertBox.style.zIndex = 9999;
      alertBox.role = "alert";
      alertBox.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      `;
      document.body.appendChild(alertBox);
      setTimeout(() => alertBox.remove(), 5000);
    }
     if(username)
     {
       document.getElementById("wellcomeusername").innerHTML="Hi " + username;
       displayUsers();
     }
      
    else
      window.location.href="index.html";

 logoutBtn.addEventListener("click", () => {
  logoutModal.show();
});
confirmLogoutBtn.addEventListener("click", () => {
  localStorage.removeItem("currentLoginUser");
  window.location.href = "index.html";
});
     

    