
function generar () {
    let resul = document.querySelector(".resul");
    resul.style.padding="2%";
    let nombre = document.querySelector("#nombre").value;
    document.querySelector(".resul").innerHTML=`<p>Nombre: ${nombre}</p>`;
    let apellidos = document.querySelector("#apellidos").value;
    document.querySelector(".resul").innerHTML+=`<p>Apellidos: ${apellidos}</p>`;
    //seleccionar todos los inputs de peliculas chekeados y printearlos
    let peliculas = document.querySelectorAll('input[name="peliculas"]:checked');
    document.querySelector(".resul").innerHTML+="&nbsp;Mis peliculas:<br>"
    for (const pelicula of peliculas) {
        document.querySelector(".resul").innerHTML+=`${(pelicula.value)} `;
    }
    //Comprobar si se ha seleccionado un color
    if (document.querySelector('input[type="radio"][name="color"]:checked')==null) {
        alert("Selecciona un color");
    } else {
        let sele = document.querySelector('input[type="radio"][name="color"]:checked').value;
        console.log(sele);
        let labelColor = document.getElementById('cajaColor');
        switch (sele) {
            case "rojo": color="red"; break;
            case "verde": color="green"; break;
            case "azul": color="blue"; break;
        }
        labelColor.style.backgroundColor=color;
        document.querySelector(".resul").innerHTML+=`<p>Color seleccionado: ${sele}</p>`;
    }
}