let numerosRegex = /^\d{0,3}\,?\d{1,3}?$/;
let horaRegex = /^((0|1)[0-9]|2[0-3])\:[0-5][0-9](\:[0-5][0-9])?$/;
let numero = document.getElementById("campoNumero");
let hora = document.getElementById("campoHora");

numero.addEventListener("keyup", (e) => {
    numero = document.getElementById("campoNumero");
    if(numerosRegex.test(numero.value)) {
        numero.style.color = "green";
    } else if (numero.value === '') {
        numero.style.color = "none";
    } else {
        numero.style.color = "red";
    }
});

hora.addEventListener("keyup", (e) => {
    hora = document.getElementById("campoHora");
    if(horaRegex.test(hora.value)) {
        hora.style.color = "green";
    } else if (hora.value === '') {
        hora.style.color = "none";
    } else {
        hora.style.color = "red";
    }
});