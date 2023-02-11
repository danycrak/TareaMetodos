// Invertir el orden de una cadena de texto almacenada en una array, 
// considerar que el tamaño de la cadena es un numero par. world=[’o’,’ñ’,’e’’l’,’i’,’u’,’q’,’a’,’y’,’a’,’u’,’g’]

let aux="";
let world=['o','ñ','e','l','i','u','q','a','y','a','u','g'];
let j= world.length-1;
let t= world.length/2;
let cadena="";

for(let i=0;i < t;i++){
    aux=world[i];
    world[i]= world[j];
    world[j]= aux;
    j=j-1;
 }

 for(let i=0;i < world.length;i++){
     cadena= cadena + world[i];
 }
 console.log("mostramos la cadena con el orden invertido: " + cadena);