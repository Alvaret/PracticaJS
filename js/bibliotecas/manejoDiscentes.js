

const borrarListadoHtml = () => {
    let doc = window.document;
    var listado = doc.getElementById('listado');
    listado.innerHTML = '';
}

const cargarDiscentes = (arrayDiscentes) => {

    borrarListadoHtml();
    let doc = window.document;
    let listado = doc.getElementById('listado');

    var articleDiscentesTotal = arrayDiscentes.map( 
        discente => {
            //El id del discente
            let idDiscente = `${discente.id}`;

            //Creamos un article y le añadimos la clase discente
            let articleDiscente = doc.createElement('article');
            articleDiscente.setAttribute("id",idDiscente);
            articleDiscente.classList.add('discente');

            //Creamos un div
            let divDatos = doc.createElement('div');

            //Creamos p para nombre
            let pNombre = doc.createElement('p');
            //Añadimos la clase nombre
            pNombre.classList.add('nombre');
            //Cremos el contenido en texto y lo añadimos al p
            let nombreApellidos = `${discente.nombre} ${discente.apellidos}`;
            pNombre.textContent = nombreApellidos;

            //Añadimos pNombre al elemento divDatos
            divDatos.appendChild(pNombre);

            //Cremos p para para si acepta publicar su imagen y añadimos clase acepta
            let pImagen = doc.createElement('p');
            pImagen.classList.add("acepta");

            //Lógica para saber si acepta y añadirlo al p
            let acepta = discente.acepta ? 'Acepta' : 'No acepta' ;
            let textoAcepta = `${acepta} que su imagen sea publicada`;

            pImagen.textContent = textoAcepta;

            //Añadimos p de imagen al div
            divDatos.appendChild(pImagen);

            //Añadimos divDatos al article 
            articleDiscente.appendChild(divDatos);

            //Crear la p y añadir la classe acciones
            let pAcciones = doc.createElement("p");
            pAcciones.classList.add("acciones");

            //Crear boton editar , añadir clases y atributo
            let botonEditar = doc.createElement('button');
            botonEditar.classList.add('mini','borde','editar');
                //botonEditar.setAttribute('id' , idDiscente);
            botonEditar.textContent = `Editar`;
            //Lo añadimos al p de acciones
            pAcciones.appendChild(botonEditar);

            //Crear boton de eliminar , añadir clases y atributo
            let botonEliminar = doc.createElement('button');
            botonEliminar.classList.add('mini' , 'borde' , 'eliminar');
                //botonEliminar.setAttribute('id' , idDiscente);
            botonEliminar.textContent = `Eliminar`;
            //Lo añadimos al p de acciones
            pAcciones.appendChild(botonEliminar);

            //Añadimos o de acciones al article
            articleDiscente.appendChild(pAcciones);
            //Añadimos el article al listado
            listado.appendChild(articleDiscente);

        
    });


}

export { cargarDiscentes };
