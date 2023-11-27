function adicionarParagrafo() {
    var conteudoDiv = document.getElementById("conteudo");
    
    var novoParagrafo = document.createElement("p");
    novoParagrafo.textContent = "Este é um novo parágrafo adicionado usando JavaScript.";
    
    novoParagrafo.classList.add("novo-paragrafo");
    
    conteudoDiv.appendChild(novoParagrafo);
  }