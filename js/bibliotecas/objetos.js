// Array inicial para almacenar los objetos del tipo discente.
// Este es el array que hay que modificar.

let discentes = [
  {
    id: "aed03f15-ffa8-4986-b4d7-8f1ad6c3bc0c",
    nombre: "Marinés",
    apellidos: "Antón Castelló",
    acepta: false,
  },
  {
    id: "fe233f70-e9ec-489b-9582-395eb76ef8b6",
    nombre: "Miguel",
    apellidos: "Mira Flor",
    acepta: true,
  },
  {
    id: "3635cc45-8cd8-4a46-80a2-c4d1dc082f09",
    nombre: "Juan Carlos",
    apellidos: "Gómez Vicente",
    acepta: false,
  },
];

const nuevoDiscente = (discente) => {
  discentes = [...discentes, discente];
  console.log('Discente agregado');
} ;

const borrarDiscenteId = (id) => {
discentes = discentes.filter( discentes => discentes.id != id );
console.log("Discente eliminado");
} ;

const mostrarDiscenteId = (id) => {
  let discentePorId = discentes.find( discentes => discentes.id === id );
  return discentePorId;
}


const actualizarDiscenteId = (id, nombre, apellidos , permite) => {
  console.log('ID:', id);
  console.log('Nombre:', nombre);
  console.log('Apellidos:', apellidos);
  console.log('Permite:', permite);
  

  let indexDiscente = discentes.findIndex(discente => discente.id === id);

  
  if (indexDiscente !== -1) {
    discentes[indexDiscente].nombre = nombre;
    discentes[indexDiscente].apellidos = apellidos;
    discentes[indexDiscente].acepta = permite;
    console.log('Discente actualizado');
  } else {
    console.log('No se encontró ningún discente con el ID dado');
  }
};


export { discentes , nuevoDiscente , borrarDiscenteId , mostrarDiscenteId , actualizarDiscenteId };
