"use strict";

import { generarUuidAleatorio } from './bibliotecas/helpers.js';
import { discentes , nuevoDiscente , borrarDiscenteId }  from './bibliotecas/objetos.js';
import { cargarDiscentes }  from './bibliotecas/manejoDiscentes.js';

document.addEventListener('DOMContentLoaded', () => {
    cargarDiscentes(discentes);
  });