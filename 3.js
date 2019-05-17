function promedio1(nota1,nota2,nota3){
   let resultado=(nota1+nota2+nota3)/3;
    console.log('el promedio 1 es ' + resultado);
}


let promedio2=(nota1,nota2,nota3)=>{
    setTimeout(function(){
   let resultado=(nota1+nota2+nota3)/3;
    console.log('el promedio 2 es ' + resultado);
},2000); //se demora 2000 milisegundos en mostrar en mostrar esta funcion  



let promedio3=(nota1,nota2,nota3)=>console.log('el promedio 3 es ' + (nota1+nota2+nota3)/3);


promedio1(3,4,5);
promedio2(1,2,1);
promedio3(5,4,5);


