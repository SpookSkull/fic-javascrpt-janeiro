const nome = document.getElementById("nome");
const cidade = document.getElementById("cidade");
const email = document.getElementById("email");

const titulo = document.getElementById("titulo")
const subtitulo = document.getElementById("subtitulo")
const txtemail = document.getElementById("txtemail")

function mudar(event) {
    event.preventDefault();
    console.log(nome.value);

    if (nome.value === "" || cidade.value === "" || email.value === "") {
        alert("preencha o campo por favor");
        return false;
    }

   titulo.innerHTML = nome.value;
    subtitulo.innerHTML = cidade.value;
    txtemail.innerHTML = email.value;
    nome.value = "";
    cidade.value = "";
    email.value = "";s
}

function mudarCor() {
    if (document.body.style.backgroundColor === "blue") {
        document.body.style.backgroundColor = "";
    } else {
        document.body.style.backgroundColor = "blue";  // maneira estranha de voltar a cor original
    }
} 