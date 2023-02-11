/*Ejercicio 05**
    
    Contar cuantos números impares tiene el siguiente array: `nums=[3, 5, 6, 7, 3, 5, 6, 7]`
    
    **Nota:** Usar el operador mod, este operador devuelve el residuo de dividir dos números.
    
    Ejemplos: `9 mod 2 = 1` `8 mod 2 = 0` */


let contador=0;
let nums=[3, 5, 6, 7, 3, 5, 6, 7];
let cadena="";

for(let i=0;i < nums.length;i++){
    if(nums[i] % 2 != 0){
        contador= contador+1;
    }
   cadena = cadena + nums[i];
}

console.log("De la cadena: " + cadena+ ", tenemos: " + contador + " números impares.");
