//Dado un vector de números  buscar el numero mayor y guardar en la variable `m`.

//`nums=[1,8,2,5,5]`

//`m=8`

let nums=[1,8,2,12,15];
let m =0;
let i=0;
    m= nums[i];

for(i;i < nums.length;i++){
    if(m < nums[i+1]){
        m = nums[i+1];
    }  
    
}

console.log("El número mayor es: " + m);
