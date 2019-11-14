var exports = module.exports = {};

function ehRepetido(result, numero) {
    var found = false
    result.forEach(element => {
        if (element == numero) {
            found = true
        }
    });
    return found
}

exports.gerarNumerosAleatorios = function(qtdNumerosJogados) {
    var result = []
    while (result.length < qtdNumerosJogados) {
        var numero = Math.floor(Math.random() * 52) + 1
        if (!ehRepetido(result, numero)) {
            result.push(numero)
        }
    }
    return result
}