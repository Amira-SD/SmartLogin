  // General Modal
    var generalModal      = new bootstrap.Modal(document.getElementById("generalModal"));
    var titleMessage      = document.getElementById("confirmMessage");
    var popupTitle        = document.getElementById("popupTitle");
    var generalMessage    = document.getElementById("generalMessage");

        // Function to show popup
    function showPopup(message, title,type = "info") {
      generalMessage.textContent  = message;
      titleMessage.textContent    = title;
      popupTitle.className        = ""; // reset
      if (type === "success") popupTitle.className      = "modal-header bg-success text-white";
      else if (type === "error") popupTitle.className   = "modal-header bg-danger text-white";
      else if (type === "warning") popupTitle.className = "modal-header bg-warning text-white";
      else generalMessage.classList.add("text-primary");
      generalModal.show();
    }