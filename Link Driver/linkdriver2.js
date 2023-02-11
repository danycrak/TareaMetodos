let doc = document.getElementById("img01");
let url = prompt('Ingrese id URL gdrive');
doc.src = "https://drive.google.com/uc?export=view&id=${url}";

let start = 0;
let end = 0;
let link = url;
let interval =[];
let cont = 0;

for (let i = 0; i < link.length; i++) {
if (link[i] === "=") {
interval[cont] = i;
cont++;
}
}

let img01 = link.substring(interval[0] + 1);
console.log(img01);