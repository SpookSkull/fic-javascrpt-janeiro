
// variaveis
const inputnota = document.getElementById("nota");
const resultado = document.getElementById("resultado")
const message = document.getElementById("message")

function resultadonotaclick(event) {
    event.preventDefault();
    console.log("ola andrey");
   // alert("ola mermão");
    console.log(inputnota.value);

    if (inputnota.value === "") {
      message.style.display = "block";
        return false;
    }

    message.style.display = "none";

    if (inputnota.value >= 6) {
        resultado.innerHTML = "aprovado";
    } else {
        resultado.innerHTML = "reprovado";
    } 

    inputnota.value = "";
}

