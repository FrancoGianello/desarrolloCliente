window.addEventListener('mousemove', function(e){
    document.getElementById("resultadoPrimero").innerHTML = "posición X:"+ e.clientX;
    document.getElementById("resultadoSegundo").innerHTML = "posición Y:"+ e.clientY;
    document.getElementById("resultadoTercero").innerHTML = "posición X:"+ e.screenX;
    document.getElementById("resultadoCuarto").innerHTML = "posición Y:"+ e.screenY;
})