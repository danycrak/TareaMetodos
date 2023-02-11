let doc = document.getElementById("img01")
let url = prompt ('Ingrse id Url gdrive');
doc.src=`https://drive.google.com/uc?export=view&id=${url}`;

let start =0
let end =0
let link= "https://drive.google.com/uc?export=view&id=${url}";

for (let i=0;i<link.length ;i++){
    if (link[i]==="/"){
         interval[cont]=i;
            cont++;
       
        }
    }


    
    let img01 = link.substring(interval[0]+1, interval[1]);
    console.log (img01);