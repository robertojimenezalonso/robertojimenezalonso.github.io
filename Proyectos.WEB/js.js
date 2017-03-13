var xmlhttp = new XMLHttpRequest();
var url = "json.json";

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var documentJson = JSON.parse(this.responseText);
        var myArr = documentJson.Actividades;
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
    var section = document.getElementById("main");
  

    for (i = 0; i < arr.length; i++) {
        //VARIABLES//
        var proyecto = document.createElement("div");
        var imagen = document.createElement("img");
        var titulo = document.createElement("h1");
        var enlace = document.createElement("a");
        var nodoTitulo = document.createTextNode(arr[i].Titulo);
        //ATRIBUTOS//
        
        imagen.setAttribute("src", arr[i].Foto);
        imagen.setAttribute("alt", "imagen");
        enlace.setAttribute("href", arr[i].Link);
        titulo.setAttribute("class", "titulo");
        titulo.appendChild(nodoTitulo);
        enlace.appendChild(imagen);
        proyecto.appendChild(titulo);
        proyecto.appendChild(enlace);
        
        section.appendChild(proyecto);


    }



 }
