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


function desencripta(arr1) {

    function escapeRegExp(arr1) {
        return arr1.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    }
    const pattern = escapeRegExp(arr1);
    const regex = new RegExp(pattern, 'g');
    console.log(regex);
    const result = arr1.replace(regex, function (match) {
        switch (match) {
            case 'ai': return 'a';
            case 'enter': return 'e';
            case 'imes': return 'i';
            case 'ober': return 'o';
            case 'ufat': return 'u';
        }
    });
    return result;
}

function encriptarTexto() {
    var primerComponente = document.getElementById('componente1');
    var segundoComponente = document.getElementById('componente2');
    if (!primerComponente.hidden) {
        segundoComponente.hidden = false;
        primerComponente.hidden = true;
    }
    let textoIngresado = document.getElementById('inputTexto').value;
    let textoEncriptado = encriptar(textoIngresado);
    let resultado = document.getElementById('outputTexto');
    resultado.textContent = textoEncriptado;
}

function desencriptarTexto() {
    let textADesencriptar = document.getElementById('outputTexto').value;
    let textDesencriptado = desencripta(textADesencriptar);
    console.log(textDesencriptado);


}