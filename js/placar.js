function inserePLacar() {
    const corpoTabela = $(".placar").find("tbody");
    const usuario = "Daniel";
    const numeroPalavras = $("#contador-palavras").text();
    const linha = novaLinha(usuario, numeroPalavras);
    linha.find(".botao-remover").click(removeLinha);
    
    corpoTabela.prepend(linha);
}

function novaLinha(usuario, numeroPalavras) {
    const linha = $("<tr>");
    const colunaUsuario = $("<td>").text(usuario);
    const colunaNumeroPalavras = $("<td>").text(numeroPalavras);
    const colunaRemover = $("<td>");
   
    const link = $("<a>").addClass("botao-remover").attr("href", "#");
    const icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);
    colunaRemover.append(link);
    linha.append(colunaUsuario)
    linha.append(colunaNumeroPalavras)
    linha.append(colunaRemover)

    return linha;
}

function removeLinha(event){
    event.preventDefault();
    $(this).parent().parent().remove();
};