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

function quedanDias(){
   let fecha = new Date();
   let fechaFinal = new Date(2023,0,1);
   let contenedor = document.getElementById('ejer2');
   let quedan = fechaFinal-fecha;
   contenedor.innerHTML = "Quedan: "+parseInt(quedan/86400000)+ " días para el fin";
}