
let doc = document.getElementById("root");
let cards=[];


let url = prompt ('Ingrse id Url gdrive');

let posd =0;
let posv =0;




for (let i=0;i<url.length ;i++){
    if (url.substring(i,i+2)==="d/"){
    posd=i+2;
} else if  (url.substring(i,i+2)==="/v") { 
    posv =i};
      
          
        }
    let root = url.substring(posd, posv);
    console.log (root);

    
let card = document.createElement('article');
let tittle = document.createElement('h4');
let image = document.createElement('img');
let para = document.createElement("p");
let node = document.createTextNode(" Gal Gadot, una ‘superwoman’ dispuesta a cambiar el mundo con su ejemplo; La actriz que da vida a Wonder Woman tiene dos niñas y está casada con un empresario inmobiliario que admira su independencia y practica la igualdad y el respeto en su relación");
image.src=`https://drive.google.com/uc?export=view&id=${root}`;
tittle.innerHTML="GAL GADOT 'SUPERWOMAN'"
card.appendChild(tittle);
card.appendChild(image);
card.appendChild(para)
 doc.appendChild(card)

para.appendChild(node);

