function temperaturas() {

    let existencia = document.getElementById("existe");
    if(typeof(existencia)!=undefined && existencia != null){
            document.getElementById("existe").remove();
    }
        const cosa =  document.getElementById("divPrimero");
    console.log(cosa);
    let tabla = document.createElement('table');
    tabla.setAttribute("id", "existe");
    let valor = parseInt(document.getElementById('rangoMinimo').value);
    let diferencia = parseInt(document.getElementById('rangoMaximo').value) - valor;
    let td ="";
    for (let i = 0; i < 12; i++) {
        let tr = tabla.insertRow();
        if(document.getElementById("celsius").checked)
        {
            if(i==0) {
                tabla.insertRow();
                td = tr.insertCell();   
                td.appendChild(document.createTextNode("De Farenheit a Celsius"));
            }else{
            td = tr.insertCell();   
            let valorRedondeado = valor / (9/5)-32;
            td.appendChild(document.createTextNode(valorRedondeado.toFixed()));
            valor+=diferencia/10;
            }
        }else 
        if(document.getElementById("faren").checked)
        {
                if(i==0) {
                    tabla.insertRow();
                    td = tr.insertCell();   
                    td.appendChild(document.createTextNode("De Celsius a Farenheit"));
                }else{
                td = tr.insertCell();   
                let valorRedondeado = valor * (9/5)+32;
                td.appendChild(document.createTextNode(valorRedondeado.toFixed()));
                valor+=diferencia/10;
             }
        }
    }
    cosa.appendChild(tabla);
}
function convertirDinero(){
    let valor = parseInt(document.getElementById('dineroInicial').value);
    if(valor<=0 && valor!=undefined && valor!=null) 
    alert("ERROR, introduzca parámetros válidos")
    else {
            if(document.getElementById("yen").checked)
            {
                alert("Dólares:"+ valor*0.0067 +"\nEuros:"+ valor*0.0069+"\nLibras:"+valor*0.0059);
            }else 
            if(document.getElementById("dolar").checked)
            {
                alert("Yenes:"+valor*148.78 +"\nEuros:"+ valor*1.02 +"\nLibras:"+valor*0.88);
            }
            if(document.getElementById("euro").checked)
            {
                alert("Yenes:"+ valor*145.96+"\nDólares:"+ valor* 0.98+"\nLibras:"+valor*0.86);
            }else 
            if(document.getElementById("libra").checked)
            {
                alert("Yenes:"+ valor*169.74 +"\nDólares:"+ valor*1.14+"\nEuros:"+1.16);
            }
        }
        cosa.appendChild(tabla);
}