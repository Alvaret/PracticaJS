

import { limpiarFormulario , crearDiscente } from "./datosDiscente.js";
import { actualizarDiscenteId , nuevoDiscente} from "./objetos.js";
import { validarFormulario , validarId } from "./validarForm.js";


const actualizarDiscente = (e) => {
    if (validarFormulario() && validarId() ) {

        const doc = window.document;

        let nombre = doc.getElementById('nombre').value ;
        let apellidos = doc.getElementById('apellidos').value ;
        let permiso = doc.getElementById('permite').checked;
        let id = doc.getElementById('idOculto').value;

        actualizarDiscenteId(id,nombre,apellidos,permiso);
        limpiarFormulario();

        


    }else{
        console.log("Rellena con datos validos");
    }



};




const guardarDiscente = (e) => {

    let doc = window.document;
    let nombre = doc.getElementById('nombre').value ;
    let apellidos = doc.getElementById('apellidos').value ;
    let permiso = doc.getElementById('permite').checked;

if (validarFormulario() && !validarId() ) {
    let discente = crearDiscente(nombre , apellidos , permiso);
            console.log(discente);
            nuevoDiscente(discente);
            limpiarFormulario();
}else {
        console.log('Datos incorrector o Usuario Ya creado');
    }
}

export { actualizarDiscente , guardarDiscente} ;
