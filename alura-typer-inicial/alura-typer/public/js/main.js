var tempoInicial = $("#tempoD").text();

$(document).ready(function(){
    inicializaContadores();
    inicializaCronometro();
    inicializaTamanhoFrase();
    
})

function inicializaTamanhoFrase(){
var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;
var tamanhoFraseElement = $("#tamanho_frase");
console.log(numPalavras);
tamanhoFraseElement.text(numPalavras);
}

var digitação = $(".campoDigitação");

function inicializaContadores(){
digitação.on("input", function(){
    var conteudo = digitação.val();
    var qntPalavras = conteudo.split(/\S+/).length - 1  ;
    $("#contador_palavras").text(qntPalavras);
    
    var qntCaracteres = conteudo.length;
    $("#contador_caracteres").text(qntCaracteres);
});
}
function inserePlacar(){
    var tabela = $(".placar").find("tbody");
    var usuario = "Douglas";
    var numPalavras = $("#contador_palavras").text();

var linha = "<tr>"+
                "<td>"+ usuario + "</td>"+
                "<td>"+ numPalavras + "</td>"+
                "<td><button id='remover'>remover</button></td> "+
            "</tr>";

    tabela.prepend(linha);        
}
function remover(){
$("#remover").click(function(){
    $(this).parent().parent().remove();
});
}
 function novaLinha(usuario, palavras){
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");
    var link = $("#remover>")
 }


function inicializaCronometro(){
var tempoRestante = $("#tempoD").text();   
digitação.one("focus",function(){
      
    var intervalo = setInterval(function(){
        tempoRestante--;
        $("#tempoD").text(tempoRestante);
        if(tempoRestante < 1){

            digitação.attr("disabled",true);
            clearInterval(intervalo);
        }
    },1000);

$("#reiniciar").on("click", function(){
    digitação.attr("disabled", false);
    digitação.val("");
    $("#contador_palavras").text("0");
    $("#contador_caracteres").text("0");
    $("#tempoD").text(tempoInicial);
    inicializaCronometro();
    clearInterval(intervalo);
    inserePlacar();
});
});
}
