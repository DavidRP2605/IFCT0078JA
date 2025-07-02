document.addEventListener("DOMContentLoaded", () => {
  let formulario = document.getElementById("elFormulario");
  let inputNombre = document.getElementById("campoNombre");
  let inputApellidos = document.getElementById("campoApellidos");
  let inputNacimiento = document.getElementById("campoFecha");
  let inputEmail = document.getElementById("campoEmail");
  let inputProvincia = document.getElementById("campoProvincia");
  let inputGenero = document.querySelectorAll('input[name="genero"]');
  let inputTecnologia = document.getElementById("campoTecnologias");
  let inputExperiencia = document.getElementById("campoExperiencia");
  const botonGuardar = document.getElementById("botonGuardar");
  let checkPolitica = document.getElementById("checkPolitica");
  let checkCondiciones = document.getElementById("checkCondiciones");

  //Hacemos que el boton guardar este deshabilitado por defecto
  botonGuardar.disabled = true;

  //Creamos funcion para comprobar que el campo nombre no este vacio y tenga al menos 3 caracteres y lo añadimos en un parrafo que se añade debajo del campo nombre solo si no es correcto
  function validarNombre() {
    let parrafoError = document.getElementById("errorNombre");
    let tdNombre = document.getElementById("tdNombre");
    //Guardamos el largo del nombre para comprobarlo
    const largoNombre = inputNombre.value.length;
    //Guardamos la variable por si el nombre está vacío
    const nombreVacio = "";
    if (
      largoNombre > 80 ||
      largoNombre < 3 ||
      inputNombre.value === nombreVacio ||
      !/^[a-zA-ZÀ-ÿ\s]+$/.test(inputNombre.value.trim())
    ) {
      if (!parrafoError) {
        parrafoError = document.createElement("p");
        parrafoError.id = "errorNombre";
        parrafoError.textContent = "El nombre introducido no es válido.";
        parrafoError.style.color = "red";
        tdNombre.appendChild(parrafoError);
      }
      return false;
    } else {
      if (parrafoError) {
        parrafoError.remove();
      }
      return true;
    }
  }
  //Hacemos un addEventListener al campo nombre para que valide al escribir
  inputNombre.addEventListener("input", validarNombre);

  //Creamos funcion para comprobar que el campo apellidos no este vacio y tenga al menos 3 caracteres y lo añadimos en un parrafo que se añade debajo del campo apellidos solo si no es correcto
  function validarApellidos() {
    let parrafoError = document.getElementById("errorApellidos");
    let tdApellidos = document.getElementById("tdApellidos");
    //Guardamos el largo del nombre para comprobarlo
    const largoApellidos = inputApellidos.value.length;
    //Guardamos la variable por si el nombre está vacío
    const apellidosVacio = "";
    if (
      largoApellidos > 80 ||
      largoApellidos < 3 ||
      inputApellidos.value === apellidosVacio ||
      !/^[a-zA-ZÀ-ÿ\s]+$/.test(inputApellidos.value.trim())
    ) {
      if (!parrafoError) {
        parrafoError = document.createElement("p");
        parrafoError.id = "errorApellidos";
        parrafoError.textContent = "El apellido introducido no es válido.";
        parrafoError.style.color = "red";
        tdApellidos.appendChild(parrafoError);
      }
      return false;
    } else {
      if (parrafoError) {
        parrafoError.remove();
      }
      return true;
    }
  }
  //Hacemos un addEventListener al campo apellidos para que valide al escribir
  inputApellidos.addEventListener("input", validarApellidos);

  //Funcion para calcular la edad a partir de la fecha de nacimiento
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

  function validarFechaNacimiento() {
    let parrafoError = document.getElementById("errorFecha");
    let tdEdad = document.getElementById("tdEdad");

    const dia = parseInt(inputNacimiento.value.split("-")[2]);
    const mes = parseInt(inputNacimiento.value.split("-")[1]);
    const anio = parseInt(inputNacimiento.value.split("-")[0]);

    const edad = calcularEdad(dia, mes, anio);

    if (!edad || edad < 18) {
      if (!parrafoError) {
        parrafoError = document.createElement("p");
        parrafoError.id = "errorFecha";
        parrafoError.textContent = "Edad inválida";
        parrafoError.style.color = "red";
        tdEdad.appendChild(parrafoError);
      }
      return false;
    } else {
      if (parrafoError) {
        parrafoError.remove();
      }
      return true;
    }
  }

  //Hacemos un addEventListener al campo edad para que valide al seleccionar una fecha
  inputNacimiento.addEventListener("blur", validarFechaNacimiento);

  //Creamos funcion para comprobar que el campo email no este vacio y tenga estructura de email y lo añadimos a la derecha del campo email solo si no es correcto
  function validarEmail() {
    let parrafoError = document.getElementById("errorEmail");
    let tdEmail = document.getElementById("tdEmail");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputEmail.value)) {
      if (!parrafoError) {
        parrafoError = document.createElement("p");
        parrafoError.id = "errorEmail";
        parrafoError.textContent = "El email no es válido.";
        parrafoError.style.color = "red";
        tdEmail.appendChild(parrafoError);
      }
      return false;
    } else {
      if (parrafoError) {
        parrafoError.remove();
      }
      return true;
    }
  }
  //Hacemos un addEventListener al campo email para que valide al escribir
  inputEmail.addEventListener("input", validarEmail);

  //Creamos una funcion para comprobar que el campo provincia no nos viene vacío
  function validarProvincia() {
    let provinciaVacia = inputProvincia.value;
    let parrafoError = document.getElementById("errorProvincia");
    let tdProvincia = document.getElementById("tdProvincia");

    if (provinciaVacia === "selecciona") {
      if (!parrafoError) {
        parrafoError = document.createElement("p");
        parrafoError.id = "errorProvincia";
        parrafoError.textContent = "La provincia no es válida.";
        parrafoError.style.color = "red";
        tdProvincia.appendChild(parrafoError);
      }
      return false;
    } else {
      if (parrafoError) {
        parrafoError.remove();
      }
      return true;
    }
  }
  //Hacemos un addEventListener al campo provincia para que valide al seleccionar una provincia
  inputProvincia.addEventListener("change", validarProvincia);

  function validarTecnologias() {
    const seleccionadas = Array.from(inputTecnologia.options).filter(
      (option) => option.selected
    );

    let parrafoError = document.getElementById("errorTecnologias");
    let tdTecnologias = document.getElementById("tdTecnologias");

    if (seleccionadas.length === 0) {
      if (!parrafoError) {
        parrafoError = document.createElement("p");
        parrafoError.id = "errorTecnologias";
        parrafoError.textContent = "Debes seleccionar al menos 1 tecnología.";
        parrafoError.style.color = "red";
        tdTecnologias.appendChild(parrafoError);
      }
      return false;
    } else {
      if (parrafoError) {
        parrafoError.remove();
      }
      return true;
    }
  }

  inputTecnologia.addEventListener("change", validarTecnologias);

  //Creamos funcion para validar que el campo experiencia no esta vacío ni introduce número menores que 0 o mayores que 50
  function validarExperiencia() {
    let parrafoError = document.getElementById("errorExperiencia");
    let tdExperiencia = document.getElementById("tdExperiencia");
    let valor = inputExperiencia.value;

    //Guardamos la variable por si la experiencia está vacía
    const vacio = "";

    if (
      inputExperiencia.value === vacio ||
      isNaN(valor) ||
      valor < 0 ||
      valor > 50
    ) {
      if (!parrafoError) {
        parrafoError = document.createElement("p");
        parrafoError.id = "errorExperiencia";
        parrafoError.textContent = "La experiencia no es válida.";
        parrafoError.style.color = "red";
        tdExperiencia.appendChild(parrafoError);
      }
      return false;
    } else {
      if (parrafoError) {
        parrafoError.remove();
      }
      return true;
    }
  }
  //Hacemos un addEventListener al campo experiencia para que valide al escribir
  inputExperiencia.addEventListener("input", validarExperiencia);

  function validarCV() {
    const inputCv = document.getElementById("campoCV");
    let parrafoError = document.getElementById("errorCv");
    let tdCv = document.getElementById("tdCv");

    const archivo = inputCv.files[0];

    if (!archivo || archivo.type !== "application/pdf") {
      if (!parrafoError) {
        tdError = document.createElement("td");
        parrafoError = document.createElement("p");
        parrafoError.id = "errorCv";
        parrafoError.textContent = "Debes subir algún archivo.";
        parrafoError.style.color = "red";
        tdCv.appendChild(parrafoError);
      }
      return false;
    } else {
      if (parrafoError) {
        parrafoError.remove();
      }
      return true;
    }
  }

  function validarCheckboxes() {
    let parrafoError = document.getElementById("errorCheckbox");
    let tdCheckbox = document.getElementById("tdCheckbox");

    if (!checkPolitica.checked || !checkCondiciones.checked) {
      if (!parrafoError) {
        parrafoError = document.createElement("p");
        parrafoError.id = "errorCheckbox";
        parrafoError.textContent =
          "Debes aceptar la política de privacidad y las condiciones de uso.";
        parrafoError.style.color = "red";
        tdCheckbox.appendChild(parrafoError);
      }
      return false;
    } else {
      if (parrafoError) {
        parrafoError.remove();
      }
      return true;
    }
  }

  checkPolitica.addEventListener("change", validarCheckboxes);

  checkCondiciones.addEventListener("change", () => {
    validarCheckboxes();
    validarFormularioCompleto();
  });

  function validarFormularioCompleto() {
    const esNombreValido = validarNombre();
    const esApellidoValido = validarApellidos();
    const esFechaValida = validarFechaNacimiento();
    const esEmailValido = validarEmail();
    const esProvinciaValida = validarProvincia();
    const esTecnologiaValida = validarTecnologias();
    const esExperienciaValida = validarExperiencia();
    const esCVValido = validarCV();
    const esCheckboxesValido = validarCheckboxes();

    // Habilitar solo si todo es correcto
    const todoCorrecto =
      esNombreValido &&
      esApellidoValido &&
      esFechaValida &&
      esEmailValido &&
      esProvinciaValida &&
      esCheckboxesValido &&
      esTecnologiaValida &&
      esExperienciaValida &&
      esCVValido;

    botonGuardar.disabled = !todoCorrecto;
  }
});
