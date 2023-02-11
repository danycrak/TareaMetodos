// Intercambiar la posición entre el primero y el ultimo elemento del siguiente array: name=[’a’,’o’,’l’,’h’]. Usar una variable auxiliar.

let aux=0;
let name1=['a','o','l','h'];
cadena="";

for(let i=0;i < name1.length;i++){
   cadena = cadena + name1[i];     
 }

aux= name1[0];
name1[0]= name1[name1.length-1];
name1[name1.length-1]= aux;
console.log("De la cadena "+ cadena+ ". Mostramos el cambio:"+name1[0]);
