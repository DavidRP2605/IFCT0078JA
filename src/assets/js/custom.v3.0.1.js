let mngSuccessRequest = function(res) {
		console.log(`onSubmitContactForm > ajax > done > res`, res);
		
		let msgContainer = $('#feedback-message');

		if(!!!res.result) {
			msgContainer.addClass('text-danger');
		} else {
			msgContainer.addClass('text-success');
		}
		
		if (msgContainer.hasClass('d-none'))
			msgContainer.removeClass('d-none');

		msgContainer.text(res.message);
};

let mngFailRequest = function(jqXHR, textStatus) {
	console.log(`onSubmitContactForm > ajax > mngFailRequest > jqXHR`, jqXHR);

		let msgContainer = $('#feedback-message');
		let res = jqXHR.responseJSON;
		
		if(!!!res.result) {
			msgContainer.addClass('text-danger');
		} else {
			msgContainer.addClass('text-success');
		}
		
		if (msgContainer.hasClass('d-none'))
			msgContainer.removeClass('d-none');

		msgContainer.text(res.message);	
};

let onSubmitContactForm = function (e) {
	e.preventDefault && e.preventDefault();

	let frm = e.target;


console.log('frm', frm);
console.log('$(frm)', $(frm));
console.log('$(frm).serialize()', $(frm).serialize());



	$.ajax({
		url: '../app/api/forms/contact.php',
		method: frm.method,
		contentType: frm.enctype,
		// headers: {},
		data: $(frm).serialize()
	})
	.done(mngSuccessRequest)
  .fail(mngFailRequest)

}

$(`#elFormulario`).on('submit', onSubmitContactForm);




// $(document).ready(function () {
//     $('#formulario').on('submit', function (e) {
//       e.preventDefault(); // Previene el envío por defecto

//       let form = this;
//       let isValid = true;

//       // Limpiar estados anteriores
//       $(form).find('.form-control').removeClass('is-valid is-invalid');

//       $(form).find('.form-control').each(function () {
//         let input = $(this)[0];

//         if (!input.checkValidity()) {
//           $(this).addClass('is-invalid');
//           isValid = false;
//         } else {
//           $(this).addClass('is-valid');
//         }
//       });

//       if (isValid) {
//         // Aquí puedes enviar el formulario manualmente si todo es válido
//         // Por ejemplo, con AJAX o simplemente descomentando la siguiente línea:
//         // form.submit();

//         $('#feedback-message')
//           .removeClass('d-none text-danger')
//           .addClass('text-success')
//           .text('Formulario válido. Puedes enviarlo.');
//       } else {
//         $('#feedback-message')
//           .removeClass('d-none text-success')
//           .addClass('text-danger')
//           .text('Por favor, corrige los errores antes de enviar.');
//       }
//     });
//   });







// (() => {
//   "use strict";
//   const forms = document.querySelectorAll(".needs-validation");

//   let onSubmitContactForm = function (e) {
//     e.preventDefault && e.preventDefault();

//     let frm = e.target;
//     console.log("onSubmitContactForm e.target", frm);

//     return false;
//   };
//   Array.from(forms).forEach((form) => {
//     form.addEventListener(
//       "submit",
//       (event) => {
//         if (!form.checkValidity()) {
//           event.preventDefault();
//           event.stopPropagation();
//         }
//         form.classList.add("was-validated");
//       },
//       false
//     );
//   });
//   $("#formulario").on("submit", onSubmitContactForm);
// })();
