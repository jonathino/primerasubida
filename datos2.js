const {estudiante, obtenerpromedio} = require('./7');

console.log('el nombre del estudiante es '+ estudiante.nombre);
console.log('el promedio del estudiante es '+ obtenerpromedio (estudiante.notas.matematicas,estudiante.notas.ingles,estudiante.notas.programacion));
            
            
            
let {nombre,edad: anos,notas:{matematicas,ingles,programacion}}= estudiante;
            console.log('el nombre del estudiantes es '+ nombre);
            console.log('el promedio del estudiante es '+ obtenerpromedio (matematicas,ingles,programacion));
            console.log('la edad del estudiantes es '+ anos);