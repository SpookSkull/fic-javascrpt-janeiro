
// variaveis
const inputnota = document.getElementById("nota");
const resultado = document.getElementById("resultado")

function resultadonotaclick(event) {
    event.preventDefault();
    console.log("ola andrey");
   // alert("ola mermão");
    console.log(inputnota.value);

    if (inputnota.value >= 6) {
        resultado.innerHTML = "aprovado";
    } else {
        resultado.innerHTML = "reprovado";
    }

    inputnota.value = "";
}