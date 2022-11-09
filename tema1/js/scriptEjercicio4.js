
let datosSueldo = [];
let datosEmpleado = [];

function obtenerDatos(departamento){
    datosEmpleado = [];
    datosSueldo= [];
    let cont=0;
    let nombre = prompt("Introduzca empleados del departamento de "+departamento);
    let sueldo = prompt("Introduzca el sueldo de "+nombre);
    while ((sueldo!=0 ||nombre!=0) || cont<4) {
        if (sueldo!=0 || nombre!=0){
        datosEmpleado.push(nombre);
        datosSueldo.push(parseInt(sueldo));
        nombre = prompt("Introduzca empleados del departamento de "+departamento);
        sueldo = prompt("Introduzca el sueldo de "+nombre);
        cont++;
        }
    }
    console.log(datosEmpleado);
    console.log(datosSueldo);
    document.getElementById("datos"+departamento).innerHTML ="";
    for (let i = 0; i < datosEmpleado.length; i++) {
        if(datosEmpleado[i]!=undefined && datosEmpleado[i]!=null)
        document.getElementById("datos"+departamento).innerHTML += datosEmpleado[i] +" tiene sueldo de "+datosSueldo[i]+ " <br/>";        
    }
    ordenar(departamento);
    maximoMinimo();
}
function ordenar(departamento){
    if(departamento=="Huelva")
    datosSueldo.sort((a, b)=>a-b);
    else 
    datosSueldo.sort((a, b)=>b-a);
    document.getElementById("datos"+departamento).innerHTML += "Sueldos ordenados <br/> ";
    for (let i = 0; i < datosSueldo.length; i++) document.getElementById("datos"+departamento).innerHTML += datosSueldo[i]+" ";
}
let maxAux =0;
let minAux=0;
function maximoMinimo(){
    let maximo = Math.max(...datosSueldo);
    let minimo = Math.min(...datosSueldo);
    if(maximo>maxAux)maxAux=maximo;
    if(minAux==0)minAux=minimo;
    if(minimo<minAux)minAux=minimo;
    document.getElementById("resultado").innerHTML = "Valor máximo: "+maxAux+" Valor mínimo: "+minAux;
}