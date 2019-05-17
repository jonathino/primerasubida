const estudiante1 = require('./7');

console.log(estudiante1.estudiante);
console.log('el promedio del estudiante es '+ estudiante1.obtenerpromedio(estudiante1.estudiante.notas.matematicas, estudiante1.estudiante.notas.ingles, estudiante1.estudiante.notas.programacion))