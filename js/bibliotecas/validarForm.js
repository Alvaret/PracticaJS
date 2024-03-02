
const validarFormulario = () => {
    var expNombre = /^[a-zA-ZÁÉÍÓÚáéíóúÜüÑñ][a-zA-ZÁÉÍÓÚáéíóúÜüÑñ0-9\-_\.\s]{2,20}$/;
    var expApellidos = /^[A-ZÁÉÍÓÚÜÑ][a-zA-ZÁÉÍÓÚáéíóúÜüÑñ\-'\s]+ [A-ZÁÉÍÓÚÜÑ][a-zA-ZÁÉÍÓÚáéíóúÜüÑñ\-'\s]+$/;

    let nombre = document.getElementById("nombre");
    let apellidos = document.getElementById("apellidos");
    if (expNombre.test(nombre.value) && expApellidos.test(apellidos.value)) {
        console.log("Formulario Valido");
        return true;
        
    } else {
        console.log("Error validar formulario");
        return false;
    }
};

const validarId = () => {
    let idOculto = document.getElementById('idOculto');
    let id = idOculto && idOculto.value != '' ? idOculto.value : false;

    if ( id) {
        console.log("Comprobado idOculto");
        return true;
    } else {
        console.log("Error en la validacion de  id");
        return false ;
    }
};



  export { validarFormulario , validarId };
  