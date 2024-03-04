

import { crearDiscente } from "./datosDiscente.js";
import { actualizarDiscenteId , nuevoDiscente} from "./objetos.js";
import { validarFormulario , validarId } from "./validarForm.js";


const actualizarDiscente = (e) => {
    if (validarFormulario() && validarId() ) {


        let nombre = e.target.parentElement.parentElement.querySelector('#nombre').value;
        let apellidos = e.target.parentElement.parentElement.querySelector('#apellidos').value;
        let permiso = e.target.parentElement.parentElement.querySelector('#permite').checked;
        let id = e.target.parentElement.parentElement.querySelector('#idOculto').value;

        actualizarDiscenteId(id,nombre,apellidos,permiso);
        limpiarFormulario();

    }else{
        //console.log("Rellena con datos validos");
    }

};




const guardarDiscente = (e) => {

if (validarFormulario() && !validarId() ) {

    let nombre = e.target.parentElement.parentElement.querySelector('#nombre').value;
    let apellidos = e.target.parentElement.parentElement.querySelector('#apellidos').value;
    let permiso = e.target.parentElement.parentElement.querySelector('#permite').checked;

    let discente = crearDiscente(nombre , apellidos , permiso);
            nuevoDiscente(discente);
            limpiarFormulario();
}else {
        //console.log('Datos incorrector o Usuario Ya creado');
    }

}

const limpiarFormulario = () => {

    let doc = window.document;

    doc.getElementById('nombre').value = '';
    doc.getElementById('apellidos').value = '';
    doc.getElementById('permite').checked = false;

    //Si existe el campo oculto de id lo borramos
    let idOculto = doc.getElementById('idOculto');
    if(idOculto) {
        idOculto.remove();
    }

}


export { actualizarDiscente , guardarDiscente , limpiarFormulario } ;
