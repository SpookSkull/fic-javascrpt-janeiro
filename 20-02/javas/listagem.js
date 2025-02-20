const listavalores = document.querySelector("#listaValores");

// carregar valores salvos ao iniciar a pagina
carregarvaloressalvos();

function carregarvaloressalvos() {
    listavalores.innerHTML = "";

    for (let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i);
        if (chave.startsWith("ValorSalvo")) {// erros
            const valor = localStorage.getItem(chave);
            // criar elemento

            const listitem = document.createElement("li");
            listitem.textContent = valor;
            listavalores.appendChild(listitem)
        }    
        
    }
}