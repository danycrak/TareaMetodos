//A partir del array `nums = [0, 0, 0, 0]` remplazar por una secuencia de números que empiece en numero `x` y en cada vez que avance el índice duplicar el valor. Empezar desde el ultimo elemento.
//Ejemplo: 
//valores iniciales: `nums = [0, 0, 0, 0]`   x = 1
//valores finales: `nums= [8, 4, 2, 1]`

let nums=[0,0,0,0];
let x=4;
let j= nums.length-1;

for(let i=0;i < nums.length;i++){
   console.log(nums[j]= x);
    x= x*2;         
    j=j-1;
  }
