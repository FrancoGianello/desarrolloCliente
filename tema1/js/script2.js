
function mostrar(){
    let nombre = document.getElementsByClassName("nombre")[0].value;
    let apellido = document.getElementsByClassName("nombre")[1].value;
    document.getElementById("boom").innerHTML = "Datos" + nombre + " " + apellido;
    let numero = document.getElementsByClassName("numero")[0].value;
    document.getElementById("circunferencia").innerHTML = "Longitud: " + (numero * 3.14 * 2);
    
}
let numeros = [];
function mostrarEdad(){    
    numeros.push(parseInt(document.getElementsByClassName("edad")[0].value));
    numeros.push(parseInt(document.getElementsByClassName("edad")[1].value));
    numeros.push(parseInt(document.getElementsByClassName("edad")[2].value));
    numeros.push(parseInt(document.getElementsByClassName("edad")[3].value));    
    numeros.sort((a,b)=>a-b);
    document.getElementById("edades").innerHTML= "Suma: " + (numeros[0]+numeros[3]) + " y producto: "+ (numeros[1]*numeros[2]);
}