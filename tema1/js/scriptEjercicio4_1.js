function perimetro(){
   let lado1= parseInt(document.getElementsByClassName("lado")[0].value);
   let lado2= parseInt(document.getElementsByClassName("lado")[1].value);
   let contenedor = document.getElementById("ejer1");
   let tabla = document.getElementById("tabla");
   contenedor.appendChild(tabla);
   let fila = document.createElement("tr");
   tabla.appendChild(fila);
   casilla = document.createElement("td");
   fila.appendChild(casilla).innerHTML= lado1.toFixed(2) +" "+ lado2.toFixed(2);
   casilla = document.createElement("td");
   fila.appendChild(casilla).innerHTML= lado1 + lado2;
   tabla.style.display = "block";
}

function alumnos(){
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let contenedor = document.getElementById("ejer2");
    if(cantidad<8 || cantidad>20){
        if(document.getElementById("error")!=null ||document.getElementById("error")!=undefined ) document.getElementById("error").remove();
        let error = document.createElement("p");
        error.id="error";
        error.innerHTML = "Error, introduzca parámetros entre 8 y 20";
        contenedor.appendChild(error);
    }
    else{
        contenedor.innerHTML = "";
        for (let i = 0; i < cantidad; i++) {
            let contenedor_inputs = document.createElement("div");
            let nombre = document.createElement("input");
            nombre.className="nombre";
            nombre.placeholder="Introduzca nombre";
            contenedor_inputs.appendChild(nombre);
            let nota = document.createElement("input");
            nota.className="nota";
            nota.placeholder="Introduzca nota";
            contenedor_inputs.appendChild(nota);
            contenedor.appendChild(contenedor_inputs);
            contenedor.style.display = "grid";
        }
        let boton = document.createElement("input");
        contenedor.appendChild(boton);
        boton.id = "notaMedia";
        boton.type="submit";
        boton.value="generar media";
        boton.onclick = function (){
            let cont = 0;
            for (let i = 0; i < cantidad; i++) {
                cont += parseInt(document.getElementsByClassName("nota")[i].value);
            }
            contenedor.innerHTML = "La media de los alumnos es: "+cont/cantidad;
            contenedor.style.display = "flex";
        }
    }
}

function comparacion(){
    
}