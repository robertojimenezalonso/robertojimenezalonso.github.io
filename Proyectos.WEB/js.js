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
        var fecha = document.createElement("p");
        var desc = document.createElement("p");
        var miembros= document.createElement("p");
        var asignaturas = document.createElement("p");
        var disponible = document.createElement("p");
        var destacado = document.createElement("p");
        var responsive   = document.createElement("p");
        var visualizacion  = document.createElement("p");
        
        var nodoTitulo = document.createTextNode(arr[i].Titulo);
        var nodoFecha = document.createTextNode(arr[i].Fecha);
        var nodoDesc = document.createTextNode(arr[i].Descripcion);
        var nodoMiem = document.createTextNode("Miembro/s: "  + arr[i].Miembros);
        
         var nodoAsig = document.createTextNode("Asignaturas: "  + arr[i].Asignaturas);
        var nodoDisp = document.createTextNode("Disponible: "  + arr[i].Disponible);
        var nodoResp = document.createTextNode("Responsive: "  + arr[i].Responsive);
        var nodoVisu = document.createTextNode("Visualización: "  + arr[i].Visualizacion);
        //ATRIBUTOS//
        
        imagen.setAttribute("src", arr[i].Foto);
        imagen.setAttribute("alt", "imagen");
        
        enlace.setAttribute("href", arr[i].Link);
        
        titulo.setAttribute("class", "titulo");
        titulo.appendChild(nodoTitulo);
        
        fecha.setAttribute("class", "fecha")
        fecha.appendChild(nodoFecha);
        
        desc.setAttribute("class","descripcion")
        desc.appendChild(nodoDesc);
        
        miembros.setAttribute("class","miembros")
        miembros.appendChild(nodoMiem);
        
        asignaturas.setAttribute("class","asignaturas")
        asignaturas.appendChild(nodoAsig);
        
        disponible.setAttribute("class","disponible")
        disponible.appendChild(nodoDisp);
        
        responsive.setAttribute("class","responsive")
        responsive.appendChild(nodoResp);
        
        visualizacion.setAttribute("class","visualizacion")
        visualizacion.appendChild(nodoVisu);
        
        enlace.appendChild(imagen);
        proyecto.appendChild(titulo);
        proyecto.appendChild(enlace);
        proyecto.appendChild(fecha);
        proyecto.appendChild(desc);        
        proyecto.appendChild(miembros);
        proyecto.appendChild(asignaturas);
        proyecto.appendChild(disponible);
        proyecto.appendChild(responsive);
        proyecto.appendChild(visualizacion);
        

        
        section.appendChild(proyecto);


    }



 }
function mostrar(arr) {
    var section = document.getElementById("mostrar");

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
$("#capa").hover(function(){
    		$("#mensaje").show();
	}, 	function(){
    	$("#mensaje").hide();
});