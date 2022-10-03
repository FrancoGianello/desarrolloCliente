let image = document.getElementById("imagen");
let audio = new Audio('../images/sound.mp4');
function encender(){
    image.src = "./images/uno.jpg";
    audio.load();
    audio.play();
}
function apagar(){
    image.src = "./images/dos.jpeg";
    audio.load();
    audio.play();
}