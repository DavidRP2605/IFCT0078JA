(() => {
  "use strict";
  const forms = document.querySelectorAll(".needs-validation");

  let onSubmitContactForm = function (e) {
    e.preventDefault && e.preventDefault();

    let frm = e.target;
    console.log("onSubmitContactForm e.target", frm);

    return false;
  };
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
  $("#formulario").on("submit", onSubmitContactForm);
})();
