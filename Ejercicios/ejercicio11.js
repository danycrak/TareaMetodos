
//A partir de una valor `t` y un valor `x` que son ingresados por el usuarios, donde `t` es el tamaño del vector. 
//Llenar los elementos con múltiplos de `x`
//Ejemplo
//`t=5`
//`x=3`
//`v=[3,6,9,12,15]`

let t=10;
let x=3;
let v=[];
let cadena ="";

for(let i=0;i < t;i++){
    v[i]= x* (i +1);
    cadena= cadena + v[i] + ",";
  }

  console.log("Los multiplos de "+x+" son "+ cadena);
