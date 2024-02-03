/*
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
*/

const entradaDeTexto = document.querySelector('.conteudo-principal__input__area');


function criptografar(){
    let texto = entradaDeTexto.value;
    let textoCripto = texto.replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/e/g, 'enter').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    apagarTextoEImg();
    mostraTexto(textoCripto);
    console.log(textoCripto);
}

function descriptografar()  {
    let texto = entradaDeTexto.value;
    let textoDescriptografado = texto.replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u');;
    apagarTextoEImg();
    mostraTexto(textoDescriptografado);
    console.log(textoDescriptografado);
}


function mostraTexto(resultado) {
    document.querySelector('.conteudo-secundario__vazio').innerHTML = `
    <p class="conteudo-secundario__texto_final" id="texto-final">${resultado}</p>
    <div class="conteudo-secundario__vazio__botao">
        <button class="conteudo-secundario__vazio__botao-copiar" onclick="copiar()">Copiar</button>
    </div>`;
}

function copiar(){
    var textoCopiar = document.getElementById('texto-final');
    var selecao = window.getSelection();
    var faixa = document.createRange();
    faixa.selectNodeContents(textoCopiar);
    selecao.removeAllRanges();
    selecao.addRange(faixa)

    document.execCommand("copy");

    selecao.removeAllRanges();

    alert("Texto copiado");
}

function apagarTextoEImg() {
    let texto = entradaDeTexto.value;
    document.querySelector('.conteudo-secundario__vazio').style.display = texto == '' ? 'none' : 'flex';
    document.querySelector('.conteudo-secundario__output').style.display = texto == '' ? 'flex' : 'none';
}

