'use strict';

function encriptar(arr) {
    return arr.split('').map((str) => {
        switch (str) {
            case 'a':
                return 'ai';
            case 'e':
                return 'enter';
            case 'i':
                return 'imes';
            case 'o':
                return 'ober';
            case 'u':
                return 'ufat';
            default:
                return str;
        }
    }).join('');
}

function desencripta(cadena) {

    const palabrasAReemplazar=['ai','enter','imes','ober','ufat'];
    const vocales=['a','e','i','o','u'];

    for(let i=0; i<palabrasAReemplazar.length;i++){
        cadena=cadena.replace(new RegExp(palabrasAReemplazar[i],'g'),vocales[i]);
    }
    return cadena;
}

function encriptarTexto() {
    var primerComponente = document.getElementById('componente1');
    var segundoComponente=document.getElementById('componente2');
    if (!primerComponente.hidden) {
        segundoComponente.style.display = "flex";
        primerComponente.style.display = "none";
    }
    let elementoIngreso = document.getElementById('inputTexto');
    let textoIngresado = elementoIngreso.value;
    let textoEncriptado = encriptar(textoIngresado);
    let resultado = document.getElementById('outputTexto');
    resultado.textContent = textoEncriptado;
    elementoIngreso.value="";
}

function desencriptarTexto() {
    var primerComponente = document.getElementById('componente1');
    var segundoComponente=document.getElementById('componente2');
    if (!primerComponente.hidden) {
        segundoComponente.style.display = "flex";
        primerComponente.style.display = "none";
    }
    let elementoCapturado = document.getElementById('inputTexto');
    let textoIngresado=elementoCapturado.value;
    let textDesencriptado = desencripta(textoIngresado);
    let resultado = document.getElementById('outputTexto');
    resultado.textContent=textDesencriptado;
    elementoCapturado.value="";
}

function copiar(){
    const contenidoTextArea=document.getElementById('outputTexto');
    const botonCopiar = document.getElementById('btn-copy');
    contenidoTextArea.select();
    document.execCommand("copy");
}