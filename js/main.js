const campo = $(".campo-digitacao");
const tempoInicial = $("#tempo-digitacao").text();

// Atalho para $(document).ready();
$(function() {
    atualizaTamanhoFrase();
    incializaContadores();
    inicializaCronometro();
    inicializaMarcadores();

    $('#botao-reiniciar').click(reiniciaJogo);
});

function atualizaTamanhoFrase() {
    const frase = $(".frase").text();
    const numeroPalavras = frase.split(" ").length;
    const tamanhoFrase = $("#tamanho-frase");

    tamanhoFrase.text(numeroPalavras);
}

function incializaContadores() {
    campo.on("input", function(){
        const conteudo = campo.val();
        const quantidadeCaracteres = conteudo.length;
        let quantidadePalavras = conteudo.split(/\S+/).length - 1;
    
        $("#contador-palavras").text(quantidadePalavras);
        $("#contador-caracteres").text(quantidadeCaracteres);
    });
}

function inicializaMarcadores() {
    const frase = $(".frase").text();
    campo.on("input", function() {
        const digitado = campo.val();
        const comparavel = frase.substr(0, digitado.length);

        if (digitado == comparavel) {
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
        } else {
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }

    });
}

function inicializaCronometro() {
    let tempoRestante = $("#tempo-digitacao").text();

    campo.one("focus", function(){
        let cronometroId = setInterval(function(){
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            $("#botao-reiniciar").attr("disabled", true);
            
            if(tempoRestante < 1) {
                clearInterval(cronometroId);
                finalizaJogo();
            }
        }, 1000);
    });
}

function finalizaJogo() {
    campo.attr("disabled", true);
    campo.toggleClass("campo-desativado");
    $("#botao-reiniciar").attr("disabled", false);
    inserePLacar();
}

function reiniciaJogo(){
    campo.attr("disabled", false);
    campo.val("");

    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);

    inicializaCronometro();

    // toggleClass faz a logica on off para o botão
    campo.toggleClass("campo-desativado");
    campo.removeClass("borda-vermelha");
    campo.removeClass("borda-verde");
}