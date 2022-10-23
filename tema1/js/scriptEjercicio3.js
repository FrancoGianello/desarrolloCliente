/*
function perimetro(){
   let lado1= document.getElementsByClassName("lado")[0].value;
   let lado2= document.getElementsByClassName("lado")[1].value;
   let contenedor = document.getElementById("ejer1");
   let tabla = document.createElement("table");
   contenedor.appendChild(tabla);
   let fila = document.createElement("tr");
   tabla.appendChild(fila);
   let casilla = document.createElement("td");
   fila.appendChild(casilla).innerHTML= "lados";
   casilla = document.createElement("td");
   fila.appendChild(casilla).innerHTML= "perimetro";
    fila = document.createElement("tr");
   tabla.appendChild(fila);
    casilla = document.createElement("td");
   fila.appendChild(casilla).innerHTML= lado1 +" "+ lado2;
   casilla = document.createElement("td");
   fila.appendChild(casilla).innerHTML= parseInt(lado1) + parseInt(lado2);

}
*/
function mostrarHoraDetallada(){
   let hora = new Date();
   let mostrar = hora.toLocaleString().split(",");
   document.getElementById('generar').innerHTML = mostrar[1];
   //setInterval(mostrarHoraDetallada, 60);  
}
function mostrarHoraSimplificada(){
   let hora = new Date();
   let mostrar = hora.getHours()+ ":"+ hora.getMinutes()+ " AM";
   if(hora.getHours()>12) mostrar = (hora.getHours()-12)+ ":"+ hora.getMinutes()+ " PM";
   document.getElementById('generar').innerHTML = mostrar;
   //setInterval(mostrarHoraSimplificada, 60); 
}
function quedanDias(){
   let fecha = new Date();
   let fechaFinal = new Date(2023,0,1);
   let contenedor = document.getElementById('ejer2');
   let quedan = fechaFinal-fecha;
   contenedor.innerHTML = "<p>Quedan: "+parseInt(quedan/86400000)+ " días para el fin</p>";
}
function generarDatos(){
   let pelicula = document.getElementsByClassName("datos")[0].value;
   let autor = document.getElementsByClassName("datos")[1].value;
   let anno = document.getElementsByClassName("datos")[2].value;
   let textoPelicula = pelicula.split(" ").join("");
   let textoAutor = autor.split(" ").join("");
   let lista = document.createElement("ul");
   document.getElementById("ejer3").innerHTML="";
   document.getElementById("ejer3").appendChild(lista);
   let listados = document.createElement("li");
   lista.appendChild(listados);
   listados.innerHTML = "Longitud de: <ul class='datosIntroducidos'><li>"+ pelicula + " es "+ textoPelicula.length + " </li> <li>"+ autor +" es "+ textoAutor.length+"</li> </ul>";
   listados = document.createElement("li");
   lista.appendChild(listados);
   listados.innerHTML = "Datos formateados: <ul class='datosIntroducidos'><li>"+pelicula.toUpperCase() + "</li> <li>" + autor.toUpperCase() + "</li> <li>"+ pelicula.toLowerCase() + "</li> <li>"+ pelicula.toLowerCase()+"</li> </ul>";
   listados = document.createElement("li");
   lista.appendChild(listados);
   listados.innerHTML = "Datos introducidos: <ul class='datosIntroducidos'><li>"+pelicula+"</li> <li>"+autor+"</li> <li>"+anno+"</li> </ul>";
}