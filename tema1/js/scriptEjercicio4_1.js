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
   fila.appendChild(casilla).innerHTML= (lado1 + lado2)*2;
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
            let nombres = "";
            for (let i = 0; i < cantidad; i++) {
                nombres += "<p>"+document.getElementsByClassName("nombre")[i].value+" "+document.getElementsByClassName("nota")[i].value+" </p>";
                cont += parseInt(document.getElementsByClassName("nota")[i].value);
            }
            contenedor.innerHTML = nombres + "La media de los alumnos es: "+ (cont/cantidad).toFixed(1);
            contenedor.style.display = "flex";
        }
    }
}

function comparacion(){
    let arrayStrings = [];
    arrayStrings.push(document.getElementsByClassName("elementos")[0].value, document.getElementsByClassName("elementos")[1].value);
    console.log(arrayStrings);
    let texto1 = arrayStrings[0].toLowerCase();
    let letras2 = arrayStrings[1].toLowerCase().split("");
    let controlador = true;
    letras2.forEach(element => {
        if(!texto1.includes(element))controlador=false;
    });
    let resultado = document.getElementById("resultado");
    (controlador)?resultado.innerHTML="Hay coincidencia en todas las letas": resultado.innerHTML="No hay coindencia"
}