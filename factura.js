let start =0
let end =0
let factura = "001-003-000000001";
for (let i=0;i<factura.length ;i++){
    if (factura[i]==="-"){
        if (start==0){
            start=i+1;
        }
        else{
            end=i;
        }
    }


    }
    let ss = factura.substring(start, end,)
    console.log (ss)
