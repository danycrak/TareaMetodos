
// La suma de los Multiplos de 3 

// let x=15;

 let nums = [12, 3, 5, 7,6, -3];
 let suma = 0;


 
 for (let i = 0; i < nums.length; i++) 
 
 
 {
     if (nums[i] % 3 === 0) {
         suma += nums[i];
     }
 }
 
 console.log(suma + "Suma de Multiplos de 3");

 /*
 let sum =0;
 
 let nums=[12,3,5,7];
 for(let i=0;i < 4;i++){
     
     for(let j=1;j < 4;j++){
         sum = nums[i] + nums[j];*/