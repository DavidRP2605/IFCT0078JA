(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
    
    document.getElementById('campoCV').addEventListener('change', function () {
    const archivo = this.files[0];
    
    if (archivo) {
      const nombre = archivo.name.toLowerCase();
      if (!nombre.endsWith('.pdf')) {
        this.setCustomValidity('Solo se aceptan archivos con extensión .pdf');
      } else {
        this.setCustomValidity('');
      }
      this.reportValidity();
    }
  });
  })()
