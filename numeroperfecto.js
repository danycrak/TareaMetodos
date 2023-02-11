let sum = 0
let num = prompt("6");
for(let i=1;i<num; i++) {
    if(num%i ==0) {
        sum += i //sum=sum+i

    }
}

if(num==sum) {
    console.log ("Numero_Perfecto")

}

else {

    console.log ("Numero_Imperfecto")
}