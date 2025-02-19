let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");
let resultado = document.getElementById("resultado");

function somar(event) {
    event.preventDefault();
    
    const resultadosoma = Number(valor1.value) + Number(valor2.value);

    resultado.innerHTML = resultadosoma;
}
function subtrair(event) {
    event.preventDefault();
    
    const resultadosubtrair = Number(valor1.value) - Number(valor2.value);

    resultado.innerHTML = resultadosubtrair;
}
function mult(event) {
    event.preventDefault();

    const resultadomult = Number(valor1.value) * Number(valor2.value);

    resultado.innerHTML = resultadomult;
}
function divi(event) {
    event.preventDefault();

    const resultadodivi = Number(valor1.value) / Number(valor1.value);

    resultado.innerHTML = resultadodivi
}







