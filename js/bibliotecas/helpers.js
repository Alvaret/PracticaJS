// Función para generar identificador UUID de forma aleatoria.
const generarUuidAleatorio = () => {
  return crypto.randomUUID();
};

export { generarUuidAleatorio };
