"use strict";


import { discentes , nuevoDiscente , borrarDiscenteId }  from './bibliotecas/objetos.js';
import { cargarDiscentes }  from './bibliotecas/manejoDiscentes.js';
import { limpiarFormulario , crearDiscente , cargarDatosFormulario  } from './bibliotecas/datosDiscente.js';
import { actualizarDiscente , guardarDiscente} from './bibliotecas/manejarForm.js';

document.addEventListener('DOMContentLoaded', () => {
    var doc = window.document;

    cargarDiscentes(discentes);

    //Evento mostrar discentes mediante boton
    let botonMostrar = doc.getElementById('mostrar');
    botonMostrar.addEventListener('click' , () => {
        cargarDiscentes(discentes);
    });

    //Evento de eliminar discente y editar discente
    let listado = doc.getElementById("listado");
    listado.addEventListener('click' , (e) => {
        let botonEliminar = e.target.closest('.eliminar');

        if ( botonEliminar){
            let idDiscente = botonEliminar.parentNode.parentNode.id ;
            borrarDiscenteId(idDiscente);
            cargarDiscentes(discentes);
        }
    });

    listado.addEventListener('click' , (e) => {
        let botonEditar = e.target.closest('.editar');
        if (botonEditar){
            let idDiscente = botonEditar.parentNode.parentNode.id ;
            limpiarFormulario();   
            cargarDatosFormulario(idDiscente);
        }
    });


    //Evento actualizar un discente
    let botonActualizar = doc.getElementById('actualizar');
    botonActualizar.addEventListener('click' , (e) => {
        actualizarDiscente(e);
        cargarDiscentes(discentes);
    });




    //Evento limpiar formulario
    let botonLimpiarFormulario = doc.getElementById('limpiar');
    botonLimpiarFormulario.addEventListener('click' , () => {
        limpiarFormulario();
    });



    //Evento guardar en el formulario
    let botonGuardar = doc.getElementById('guardar');
    botonGuardar.addEventListener('click' , (e) => {
        guardarDiscente(e);
    });







  });