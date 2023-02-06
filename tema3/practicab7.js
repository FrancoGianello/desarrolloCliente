
let boton = document.getElementById("enviar")
console.log(boton)
boton.addEventListener("click", cogerDatos)





async function cogerDatos(){
    let datos = await fetch("usuarios.json")
    .then(function(datos){
        return datos.json();
    })
    .then(function(datos){
        let datoUsuario = document.getElementById("usuario").value
        let existe = false
        for (let value of datos) {
            if (datoUsuario==value.nombre)
            existe = true
        }
        let res = (existe)?"existe":"no existe"
        document.getElementById("resultado").innerHTML =  "El usuario: "+datoUsuario+" "+res
    })
}