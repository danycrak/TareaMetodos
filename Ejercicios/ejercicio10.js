//Convertir en un numero decimal un numero binario de 4 bits almacenado en un array.
//`binaryNumber=[0, 1, 0, 1]`
//Nota: Se puede usar la lógica del ejercicio 09

let nums=[0,1,0,1];
let sum =0;
let j = nums.length-1;
let x=1;
let cont=0;

for(let i=0;i < nums.length;i++){
    if(nums[j] == 1){
        sum = sum + x;     
        cont = cont + 1;
    }   
    x = x * 2;
    j = j - 1;   
}

console.log("Decimal: " + sum);
