const nome = document.getElementById("nome");
const cidade = document.getElementById("cidade");
const email = document.getElementById("email");

const titulo = document.getElementById("titulo")
const subtitulo = document.getElementById("subtitulo")
const txtemail = document.getElementById("txtemail")

function mudar(event) {
    event.preventDefault();
    console.log(nome.value);

    titulo.innerHTML = nome.value;
    subtitulo.innerHTML = cidade.value;
    txtemail.innerHTML = email.value;
}