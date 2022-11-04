const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const texto = document.querySelector("#texto");
abrir.addEventListener("click", abrirVentana);
function abrirVentana() {
	let link = "https://www.w3schools.com";
	let ventana = window.open(link, "ventana1", "width=800,height=400");
	cerrar.addEventListener("click", cerrarVentana);
	function cerrarVentana() { 
        if (!ventana.closed) ventana.close();
    }
	function espera(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
	async function contar() {
		for (i = 10; i > 0; i--) {
			if (!ventana.closed){
				texto.innerHTML = i+" segundos para el fin.";
				await espera(1000);
			}else
				break;
		}
		texto.innerHTML = 'Fin sellado';
	}
	contar();
	setTimeout(() => { if (!ventana.closed) ventana.close(); }, 10000);
}