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

function sortfunction(a, b) {
    return (a - b) //ordenado numericamente e de ordem crescente.
}

exports.gerarNumerosAleatorios = function(qtdNumerosJogados) {
    var result = []
    while (result.length < qtdNumerosJogados) {
        var numero = Math.floor(Math.random() * 60) + 1
        if (!ehRepetido(result, numero)) {
            result.push(numero)
        }
    }
    return result.sort(sortfunction)
}