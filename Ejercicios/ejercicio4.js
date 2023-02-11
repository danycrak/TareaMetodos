/*Ejercicio 04**
    
    A partir del array imprimir el índice de los elementos que sumados sean igual a la variable x.
    
    *Ejemplo:*
    
    `nums = [2, 3, 6, 5, 0]`
    
    `x=7` */

let x=7;
let sum =0;

let nums=[2,3,6,5,0];
for(let i=0;i < 4;i++){
    
    for(let j=1;j < 4;j++){
        sum = nums[i] + nums[j];
        if(x==sum){
            console.log("indice: " + i + " con valor de: "+ nums[i] + " e indice: " + j + " con valor de: " + nums[j]);
        }    
    }     
 }
