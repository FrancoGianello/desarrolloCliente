class Mascotas{
    
    constructor(nombre, comida){
        this.nombre=nombre;
        this.comida=comida;
    }
    mostrarInformacion(){
        return "<h1>Nombre: "+this.nombre+" | Consumo al día de comida: "+this.comida+"</h1>";
    }
}

class MascotasComida extends Mascotas{
    constructor(nombre, comida){
        super(nombre,comida);
    }
    mascotaDias(){
        const BOLSACOMIDA = 3000;
        return "<h2>La bolsa de comida durará "+Math.round(BOLSACOMIDA/this.comida)+" días</h2>";
    }
}

let masc1 = new MascotasComida("Juan el perro", 150);
let masc2 = new MascotasComida("Pedro el perro", 70);
let masc3 = new MascotasComida("Policia nacional", 1500);
let arrayCosas = [masc1, masc2, masc3];

mostrarTodo(arrayCosas);

function mostrarTodo(arrayCosas){
    let resultado = document.getElementById("resultado");
    arrayCosas.forEach(element => {
        resultado.innerHTML += element.mostrarInformacion() +" "+ element.mascotaDias() +"<hr/>";
    });
}
