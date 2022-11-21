class Jugador{
    constructor(nombre, link){
        this.nombre=nombre;
        this.link=link;
    }
}

let jugador1 = new Jugador("Messi", "./images/messi.jpg");
let jugador2 = new Jugador("Nadal", "./images/nadal.jpg");
let jugador3 = new Jugador("Federer", "./images/federer.jpg");
let jugador4 = new Jugador("Del Potro", "./images/delPotro.jpg");
let jugador5 = new Jugador("Djokovic", "./images/djokovic.jpg");

let arrayJugadores= [jugador1, jugador2, jugador3, jugador4, jugador5, jugador1, jugador2, jugador3, jugador4, jugador5];
arrayJugadores.sort((a,b) => 0.5 - Math.random());

function pintarCartas(arrayJugadores){
    let padre = document.getElementById("ejer2");
    let identificador = 0;
    arrayJugadores.forEach(element => {
        padre.innerHTML += '<div class="'+element.nombre+' carta"  id="'+identificador+'" onclick="comprobar('+identificador+')"><img style="display:none" src="'+element.link+'"/></div>';
        identificador++;
    });
}
pintarCartas(arrayJugadores);

let claseAux="";
let idAux="";
let cont=0;
let contadorAciertos=0;
function comprobar(id){
    let contenedor = document.getElementById(id);
    let clase = contenedor.className;
    contenedor.getElementsByTagName("img")[0].style.display = "block";
    if(cont==0){
        idAux=id;
        claseAux = clase;
        cont++;
    }else{
        cont=0;
        if(clase==claseAux){
            if(id!=idAux){
            contenedor.style.background="green";
            document.getElementById(idAux).style.background = "green";
            contenedor.removeAttribute("onclick");
            document.getElementById(idAux).removeAttribute("onclick");
            contadorAciertos++;
            }else cont=1;
        }
        else{
            setTimeout(() => {
            contenedor.getElementsByTagName("img")[0].style.display = "none";
            document.getElementById(idAux).getElementsByTagName("img")[0].style.display = "none";
            }, 500);
        }
    }
    let textoFinal = document.getElementById("resultado");
    if(contadorAciertos==(arrayJugadores.length/2)) textoFinal.innerHTML = "Has ganado oleee";
    else textoFinal.innerHTML = "Número de aciertos: "+contadorAciertos;
    console.log(clase, claseAux, cont);
}