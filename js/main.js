const frase = $(".frase").text();
const numeroPalavras = frase.split(" ").length;
const tamanhoFrase = $("#tamanho-frase");

tamanhoFrase.text(numeroPalavras);

const campo = $(".campo-digitacao");
campo.on("input", function(){
    const conteudo = campo.val();
    const quantidadeCaracteres = conteudo.length;
    let quantidadePalavras = conteudo.split(/\S+/).length - 1;

    $("#contador-palavras").text(quantidadePalavras);
    $("#contador-caracteres").text(quantidadeCaracteres);
});

let tempoRestante = $("#tempo-digitacao").text();
campo.one("focus", function(){
    let cronometroId = setInterval(function(){
        tempoRestante--;
        $("#tempo-digitacao").text(tempoRestante);
        
        if(tempoRestante < 1) {
            campo.attr("disabled", true);
            clearInterval(cronometroId);
        }
    }, 1000);
});