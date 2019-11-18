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

exports.gerarNumerosAleatorios = function(qtdNumerosJogados = 6) {
    var result = []
    while (result.length < qtdNumerosJogados) {
        var numero = Math.floor(Math.random() * 60) + 1
        if (!ehRepetido(result, numero)) {
            result.push(numero)
        }
    }
    return result.sort(sortfunction)
}

exports.compararResposta = function(jogos, numerosSorteados) {
    var array_resultado = []
    var resultado
    jogos.forEach(jogo => {
        resultado = 0
        jogo.forEach(numeroJogado => {
            numerosSorteados.forEach(numeroSorteado => {
                if (numeroSorteado == numeroJogado) {
                    resultado = resultado + 1
                }
            });
        });
        array_resultado.push(resultado)
    });
    return array_resultado
}