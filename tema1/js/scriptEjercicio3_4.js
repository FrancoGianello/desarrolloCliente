function primeraVentana(){
    let primera = window.open("https://www.w3schools.com", "ventana1", "width=300,height=200");
    primera.moveTo(500,500);
    // primera.scrollTo(0, 1000);
}
function segundaVentana(){
    let numero = Math.ceil(Math.random()*3);
    let segundo = document.getElementById("textoSegundo");
    let enlace="";
    switch (numero) {
        case 0: enlace="https://mail.google.com/mail/"; break;
        case 1: enlace="https://correoweb.educa.madrid.org/"; break;        
        case 2: enlace="https://es.yahoo.com/"; break;
        case 3: enlace="https://outlook.live.com/"; break;
        default:
            break;
    }
    
    segundo.innerHTML = "Ha salido el: "+numero+" lo que redirige a "+enlace;
    let segundaVentana = window.open(enlace, "ventana2", "width=500,height=500");
}