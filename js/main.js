"use strict";

import { generarUuidAleatorio } from './bibliotecas/helpers.js';
import { discentes , nuevoDiscente , borrarDiscenteId }  from './bibliotecas/objetos.js';
import { cargarDiscentes }  from './bibliotecas/manejoDiscentes.js';

document.addEventListener('DOMContentLoaded', () => {
    var doc = window.document;

    cargarDiscentes(discentes);

    //Evento de borrar discente
    let listado = doc.getElementById("listado");
    listado.addEventListener('click' , event => {
        let botonEliminar = event.target.closest('.eliminar');
        if ( botonEliminar){
            let idDiscente = botonEliminar.getAttribute('id');
            borrarDiscenteId(idDiscente);
            cargarDiscentes(discentes);
        }
    })



  });