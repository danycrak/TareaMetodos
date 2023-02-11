let interval =[0,0]
let cont =0
let factura = "001-000076-000000001";
for (let i=0;i<factura.length ;i++){
    if (factura[i]==="-"){
         interval[cont]=i;
            cont++;
       
        }
    }


    
    let ss = factura.substring(interval[0]+1, interval[1]);
    console.log (ss);
