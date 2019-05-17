
let promedio=(nota1,nota2,nota3, callback)=>{
    setTimeout(function(){
   let resultado=(nota1+nota2+nota3)/3;
        callback (resultado);
},2000); //se demora 2000 milisegundos en mostrar en mostrar esta funcion  
}
    
promedio (5,4,5, function(resultado){
    console.log(resultado);
})




