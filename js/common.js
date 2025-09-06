function validate(element, regex) {
      if (regex.test(element.value)) {
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
      } else {
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
      }
    }

    