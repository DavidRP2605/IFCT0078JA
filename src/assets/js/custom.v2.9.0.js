document.addEventListener("DOMContentLoaded", function (event) {
  let inputNacimiento = document.getElementById("campoFecha");
  let inputNombre = document.getElementById("campoNombre");
  let inputEmail = document.getElementById("campoEmail");
  const botonGuardar = document.getElementById("botonGuardar");
  let formulario = document.getElementById("elFormulario");
  const diaSelect = document.getElementById("diaNacimiento");
  const mesSelect = document.getElementById("mesNacimiento");
  const anioSelect = document.getElementById("anioNacimiento");
  const mensaje = document.getElementById("mensajeInput");
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  inputNombre.placeholder = "Escribe tu nombre";
  inputEmail.placeholder = "Escribe tu correo electrónico";

  botonGuardar.disabled = false;

  //Creamos un parrafo donde indicaremos si es valido o no es valido el nombre
  const parrafoNombre = document.createElement("p");

  const parrafoEmail = document.createElement("p");

  function comprobarNombre() {
    //Creamos la funcion para comprobar que es un nombre
    const expNombre = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'°. ]+$/g;

    //Comprobarmos que sea correcto
    const esNumero = expNombre.test(inputNombre.value);
    //Guardamos el largo del nombre para comprobarlo
    const largoNombre = inputNombre.value.length;
    //Guardamos la variable por si el nombre está vacío
    const nombreVacio = "";

    //Si el largo es más de 80, menos de 4, está vacio o es un número, nos pondra un mensaje de error en rojo
    if (
      largoNombre > 80 ||
      largoNombre < 4 ||
      inputNombre.value === nombreVacio ||
      !esNumero
    ) {
      parrafoNombre.textContent = "Nombre no válido";
      parrafoNombre.style.color = "red";
      botonGuardar.disabled = true;
    }
    //Si todo esta bien, nos indica que es valido
    else {
      parrafoNombre.textContent = "Nombre válido";

      parrafoNombre.style.color = "green";
      botonGuardar.disabled = false;
    }
  }

  //Evento para cuando escribimos el nombre
  inputNombre.addEventListener("keyup", function () {
    comprobarNombre();
  });

  inputNombre.insertAdjacentElement("afterend", parrafoNombre);

  //Hacemos un blur para que cuando cambiemos el foco de ese input, se quite el mensaje
  inputNombre.addEventListener("blur", function () {
    if (parrafoNombre.textContent === "Nombre válido") {
      parrafoNombre.textContent = "";
    } else {
      inputNombre.insertAdjacentElement("afterend", parrafoNombre);
    }
  });

  function comprobarEmail() {
    //Expresión regular del email
    const expEmail =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    //Comprobarmos que sea correcto
    const esEmail = expEmail.test(inputEmail.value);
    //Guardamos la variable por si el nombre está vacío
    let emailVacio = "";

    //Comprobamos que el email sea correcto y que no este vacío
    if (!esEmail || inputEmail.value == emailVacio) {
      parrafoEmail.textContent = "Email no válido";
      parrafoEmail.style.color = "red";
      botonGuardar.disabled = true;
    } else {
      parrafoEmail.textContent = "Email válido";

      parrafoEmail.style.color = "green";
      botonGuardar.disabled = false;
    }
  }

  //Evento para cuando escribimos el email
  inputEmail.addEventListener("keyup", function () {
    comprobarEmail();
  });

  inputEmail.insertAdjacentElement("afterend", parrafoEmail);

  //Hacemos un blur para que cuando cambiemos el foco de ese input, se quite el mensaje
  inputEmail.addEventListener("blur", function () {
    if (parrafoEmail.textContent === "Email válido") {
      parrafoEmail.textContent = "";
    } else {
      inputEmail.insertAdjacentElement("afterend", parrafoEmail);
    }
  });

  // Llenar los selects con días, meses y años
  function llenarSelects() {
    for (let d = 1; d <= 31; d++) {
      diaSelect.innerHTML += `<option value="${d}">${d}</option>`;
    }

    meses.forEach((nombre, index) => {
      mesSelect.innerHTML += `<option value="${index + 1}">${nombre}</option>`;
    });

    const anioActual = new Date().getFullYear();
    for (let a = anioActual; a >= 1925; a--) {
      anioSelect.innerHTML += `<option value="${a}">${a}</option>`;
    }
  }

  // Inicia los selects
  llenarSelects();

  // Calcular edad
  function calcularEdad(dia, mes, anio) {
    const hoy = new Date();
    const fechaNacimiento = new Date(anio, mes - 1, dia); // mes empieza en 0

    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const m = hoy.getMonth() - fechaNacimiento.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }

    return edad;
  }

  // Validar fecha y edad
  formulario.addEventListener("submit", function (event) {
    const dia = parseInt(diaSelect.value);
    const mes = parseInt(mesSelect.value);
    const anio = parseInt(anioSelect.value);

    const fecha = new Date(anio, mes - 1, dia);
    const fechaValida =
      fecha.getFullYear() === anio &&
      fecha.getMonth() === mes - 1 &&
      fecha.getDate() === dia;

    if (!fechaValida) {
      mensaje.textContent =
        "Fecha inválida. Por favor, selecciona una fecha correcta.";
      mensaje.style.color = "red";

      event.preventDefault();
      return;
    }

    const edad = calcularEdad(dia, mes, anio);

    if (edad < 18) {
      mensaje.textContent = "Debes ser mayor de 18 años para continuar.";
      mensaje.style.color = "red";

      event.preventDefault(); // Evita el envío
    } else {
      mensaje.textContent = ""; // Borra mensaje anterior si es válido
    }
  });
});
