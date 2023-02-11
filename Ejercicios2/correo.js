/*Escribir un programa para obtener el nombre de usuario de un correo electrónico.


.indexOf() es un método de cadena que devuelve la posición de la primera 
ocurrencia de un valor especificado dentro de una cadena. Si el valor no se
 encuentra en la cadena, devuelve 



#Ejemplo
Entrada: nombredeuser@magbdigital.net
salida: nombredeuser*/


let correo = "nombredeuser@magbdigital.net";
let user = correo.substring(0, correo.indexOf("@"));
console.log(user);