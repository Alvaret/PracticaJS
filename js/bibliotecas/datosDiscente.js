"use strict";

import { generarUuidAleatorio } from './helpers.js';

const crearDiscente = ( nombre , apellidos , value = 'false') => {

    let discente =   {
        id: generarUuidAleatorio ,
        nombre: "Marinés",
        apellidos: "Antón Castelló",
        acepta: value ,
      }

      return discente;

} 

const limpiarFormulario = () => {

    let doc = window.document;

    doc.getElementById('nombre').value = '';
    doc.getElementById('apellidos').value = '';
    console.log('Formulario Limpiado');

}

export { limpiarFormulario };
