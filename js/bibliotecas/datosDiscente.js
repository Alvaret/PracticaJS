"use strict";

import { generarUuidAleatorio } from './helpers.js';
import { mostrarDiscenteId } from './objetos.js';

const crearDiscente = ( nombre , apellidos , value) => {

    let discente =   {
        id: generarUuidAleatorio() ,
        nombre: nombre,
        apellidos: apellidos,
        acepta: value ,
      };

      return discente;

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
    console.log('Formulario Limpiado');

}

const cargarDatosFormulario = (id) => {

    let discente = mostrarDiscenteId(id);
    console.log(discente);

    let doc = window.document;

    doc.getElementById('nombre').value = discente.nombre;
    doc.getElementById('apellidos').value = discente.apellidos;
    doc.getElementById('permite').checked = discente.acepta;

    let formulario = doc.getElementById('formulario');

    let inputId = doc.createElement('input');
    inputId.setAttribute('type' , 'hidden');
    inputId.setAttribute('id' , 'idOculto');
    inputId.value = discente.id ;

    formulario.appendChild(inputId);

}

export { limpiarFormulario , crearDiscente , cargarDatosFormulario};
