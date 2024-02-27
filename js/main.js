"use strict";


import { discentes , nuevoDiscente , borrarDiscenteId , actualizarDiscenteId}  from './bibliotecas/objetos.js';
import { cargarDiscentes }  from './bibliotecas/manejoDiscentes.js';
import { limpiarFormulario , crearDiscente , cargarDatosFormulario  } from './bibliotecas/datosDiscente.js';

document.addEventListener('DOMContentLoaded', () => {
    var doc = window.document;

    //cargarDiscentes(discentes);

    //Evento mostrar discentes mediante boton
    let botonMostrar = doc.getElementById('mostrar');
    botonMostrar.addEventListener('click' , event => {
        cargarDiscentes(discentes);
    })

    //Evento de borrar discente
    let listado = doc.getElementById("listado");
    listado.addEventListener('click' , event => {
        let botonEliminar = event.target.closest('.eliminar');
        if ( botonEliminar){
            let idDiscente = botonEliminar.getAttribute('id');
            borrarDiscenteId(idDiscente);
            cargarDiscentes(discentes);
        }
    });

    //Evento mostrar datos para actulizar un discente
    listado.addEventListener('click' , event => {
        let botonEditar = event.target.closest('.editar');
        if (botonEditar){
            let idDiscente = botonEditar.getAttribute('id');
            limpiarFormulario();   
            cargarDatosFormulario(idDiscente);
        }
    });


    //Evento actualizar un discente
    let botonActualizar = doc.getElementById('actualizar');
    botonActualizar.addEventListener('click' , event => {
        
        let nombre = doc.getElementById('nombre').value ;
        let apellidos = doc.getElementById('apellidos').value ;
        let permiso = doc.getElementById('permite').checked;

        let idOculto = doc.getElementById('idOculto');
        let id = idOculto && idOculto.value != '' ? idOculto.value : false

        if(idOculto){
            if ( nombre != '' && apellidos !=''){

                actualizarDiscenteId(id,nombre,apellidos,permiso);
                cargarDiscentes(discentes);
                limpiarFormulario();
            }else {
                console.log('Formulario vacio');
            } 
        }else{
            console.log('No existe el usuario , primero debes crearlo');
        }

        
        
        
        
    });




    //Evento limpiar formulario
    let botonLimpiarFormulario = doc.getElementById('limpiar');
    botonLimpiarFormulario.addEventListener('click' , event => {
        limpiarFormulario();
    });



    //Evento guardar en el formulario
    let botonGuardar = doc.getElementById('guardar');
    botonGuardar.addEventListener('click' , event => {

        let nombre = doc.getElementById('nombre').value ;
        let apellidos = doc.getElementById('apellidos').value ;
        let permiso = doc.getElementById('permite').checked;

        //Comprobar que el campo existe para evitar guardar los usuarios ya creados
        let existeId = doc.getElementById('idOculto');

        if(!existeId){
            if ( nombre != '' && apellidos !='' ){
                let discente = crearDiscente(nombre , apellidos , permiso);
                console.log(discente);
                nuevoDiscente(discente);
                limpiarFormulario();
            }else {
                console.log('Formulario vacio o usuario ya existente');
            }

        }else {
            console.log('Usuario ya creado , actualizar en vez de guardar');
        }






    });







  });