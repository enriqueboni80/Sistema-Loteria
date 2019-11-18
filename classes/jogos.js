const util = require('../helpers/util.js')

module.exports = class jogos {
    constructor(qtdDezenas, totalJogos) {
        this.qtdDezenas = qtdDezenas;
        this.totalJogos = totalJogos;
    }
    set resultado(resultado) {
        this._resultado = resultado;
    }
    get resultado() {
        return this._resultado;
    }
    set jogos(jogos) {
        this._jogos = jogos;
    }
    get jogos() {
        return this._jogos;
    }
    gerarJogo() {
        var ArrayJogos = []
        let jogo
        while (ArrayJogos.length < this.totalJogos) {
            jogo = util.gerarNumerosAleatorios(this.qtdDezenas);
            ArrayJogos.push(jogo);
        }
        this.jogos = ArrayJogos;
        return this.jogos;
    }
}