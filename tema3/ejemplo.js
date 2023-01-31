var acordeon = document.getElementsByClassName("acordeon")
//acordeon en base a la altura del contenedor, hace el efectillo este del acordeon
for (let i = 0; i < acordeon.length; i++) {
  acordeon[i].addEventListener("click", function(){
    desplegarAcordeon(this)
  })
}
//fecha por defecto
document.getElementById('fecha').valueAsDate = new Date();

//lista desplegable
var botonLista = document.getElementById("botonLista");  
botonLista.addEventListener("click", function(){
  this.classList.toggle("active")
  var container = this.nextElementSibling
  if (container.style.maxHeight) {
      container.style.maxHeight = null
  } else {
      container.style.maxHeight = container.scrollHeight + "px"
  }
})

function desplegarAcordeon(elemento) {
  elemento.classList.toggle("active")
  var container = elemento.nextElementSibling
  if (container.style.maxHeight) {
      container.style.maxHeight = null
      elemento.removeAttribute("id")
  } else {
      container.style.maxHeight = container.scrollHeight + "px"
      elemento.id = "seleccionado"
      //cerrar los otros cuando abres uno
      for (let i = 0; i < acordeon.length; i++) {
        if(acordeon[i].id!="seleccionado"){
          acordeon[i].nextElementSibling.style.maxHeight=null
        }
        acordeon[i].removeAttribute("id")
      }
  }
}

//pintar elementos de un checkbox
var botonCb = document.getElementById("botonCb")
botonCb.addEventListener("click", function(){
  let cadena = document.getElementById("cadena")
  cadena.innerHTML=""
  var checkbox = document.getElementsByClassName("cb")
  for (let i = 0; i < checkbox.length; i++) {
    if(checkbox[i].checked)
      cadena.innerText+= " "+checkbox[i].value
  }
})


//cambiar toggle 
var toggle = document.getElementById("toggle")

toggle.addEventListener('change', function () {
  let titulo = document.getElementById("tituloToggle")
  if (toggle.checked) {
    titulo.parentElement.style.backgroundColor = "darkblue"
    titulo.style.color = "white"
    titulo.innerText="Toggle on"
  } else {
    titulo.parentElement.style.backgroundColor= "rgb(202, 195, 195)"
    titulo.style.color = "black"
    titulo.innerText="Toggle off"
  }
});

let barraBusqueda = document.getElementById("barraBusqueda")
barraBusqueda.addEventListener("input", function() {
  let filtro = barraBusqueda.value
  console.log(filtro)
  let buscar = document.getElementsByClassName("buscar")
  for (let i = 0; i < buscar.length; i++) {
    console.log()
    if (buscar[i].innerText.toUpperCase().indexOf(filtro.toUpperCase())>-1) 
        {
            buscar[i].style.display = "";
        } else {
            buscar[i].style.display = "none";
        }
  }
})


//carrusel 

const IMAGENES = [
    'img/cosa1.jpg',
    'img/cosa2.jpg',
    'img/cosa3.jpg'
];
let posicionCarusel = 0;
let retroceder = document.getElementById('retroceder');
let avanzar = document.getElementById('avanzar');
let imagen = document.getElementById('imagenCarr');

function pasarFoto() {
    if(posicionCarusel >= IMAGENES.length - 1) {
        posicionCarusel = 0;
    } else {
        posicionCarusel++;
    }
    pintarImagen();
}
function retrocederFoto() {
    if(posicionCarusel <= 0) {
        posicionCarusel = IMAGENES.length - 1;
    } else {
        posicionCarusel--;
    }
    pintarImagen();
}
function pintarImagen () {
    imagen.style.backgroundImage = `url(${IMAGENES[posicionCarusel]})`;
}
avanzar.addEventListener('click', pasarFoto);
retroceder.addEventListener('click', retrocederFoto);
pintarImagen();


//etiquetas
let elegir = document.getElementById("elegir")
let elegidos = document.getElementById("elegidos")
let tagsElegir = document.getElementsByClassName("botonTag")
for (let i = 0; i < tagsElegir.length; i++) {
  tagsElegir[i].addEventListener("click", function(){

    if(this.parentElement.id=="elegir")
      elegidos.append(this)
    else
      elegir.append(this)
  })
}

//tooltip

let tooltip = document.getElementById("tooltip")
tooltip.addEventListener("click", function(){
  var color = Math.floor(Math.random()*16777215).toString(16);
  tooltip.style.backgroundColor = "#"+color
  tooltip.value= "Color random #"+color
})

//notificaciones

let notificacion = document.getElementById("notificacion")
notificacion.addEventListener("click", function(){
  alert("Este alert es insufrible, no usar nunca!")
})

let notificacion2 = document.getElementById("otraNotificacion")
notificacion2.addEventListener("click", function(){
  prompt("El prompt está igual de mal!")
})

let notificacion3 = document.getElementById("ultimaNotificacion")
notificacion3.addEventListener("click", function(){
  Notification.requestPermission()
})