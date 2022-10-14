function ordenar(){
    let numeros = [];
    numeros.push(parseInt(document.getElementsByClassName("primero")[0].value));
    numeros.push(parseInt(document.getElementsByClassName("primero")[1].value));
    numeros.push(parseInt(document.getElementsByClassName("primero")[2].value));
    numeros.sort((a,b)=>b-a);
    for (let index = 0; index < numeros.length; index++) {
        document.getElementById("primerPrint").innerHTML = "De mayor a menor: " + numeros[0]+ " "+numeros[1] + " "+ numeros[2];
    }
}
function numeroCifras(){
    let texto = parseInt(document.getElementsByClassName("segundo").value);
   document.getElementById("segundoPrint").innerHTML = texto.toString().length;
}
function mostrarReves(){
    let cadena = parseInt(document.getElementById("tercero").value).toString();
    let cosa = "";
    for (let i = cadena.length; i > 0; i--) {
        cosa += cadena.substring(i-1, i);
    }
    document.getElementById("tercerPrint").innerHTML = cosa;
}
function capicua(){
    let cadena = parseInt(document.getElementById("cuarto").value).toString();
    let cosa = "";
    for (let i = cadena.length; i > 0; i--) {
        cosa += cadena.substring(i-1, i);
    }
    if(cosa==cadena)
    document.getElementById("cuartoPrint").innerHTML = cadena+" es capicua";
    else 
    document.getElementById("cuartoPrint").innerHTML = cadena+" no es capicua";

}
console.log("23"+12);