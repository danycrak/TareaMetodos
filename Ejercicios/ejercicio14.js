function palindromo(nums) {
    let con = 1;
    let cont = 0;
    if (nums.length % 2 != 0) {
        let ind_mitad = (Math.trunc(nums.length / 2));
        for (let i = 0; i < ind_mitad; i++) {
            if (nums[ind_mitad - con] == nums[ind_mitad + con]) {
                cont = cont + 1;
            }
            else {
                cont = 0;
            }
            con = con + 1;
        }
/*Ejercicio 14
    
        Dado un vector de numero determinar si es palindromo.*/
      
        if (cont == ind_mitad) {
            return " La cadena: " + nums + " es palindromo";
        } else {
            return " La cadena: " + nums + " no es palindromo";
        }
    } else {

        return "La cadena " + nums + " no es impar...";
    }
}

let nums = [0, 1, 2, 1, 0];
let val = palindromo(nums);
console.log(val);