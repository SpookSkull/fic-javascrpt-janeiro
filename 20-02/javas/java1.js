const campo = document.querySelector("#campo");
const salvarBtn = document.querySelector("#salvar");

// evento para salvar com clique
    salvarBtn.addEventListener("click", function() {
        const valor = campo.value;
       
        // salvar instacia
        const chave = `ValorSalvo_${Date.now()}`; // local de salmento
        console.log(chave)
        localStorage.setItem(chave, valor);

        // exibir valores salvos
        carregarvaloressalvos();

        //garantir que vai escrever algo
        if (campo.value === "") {
            alert("digite no campo por favor");
            return false;
        }
        campo.value = "";
    });
