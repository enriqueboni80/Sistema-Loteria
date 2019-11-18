var express = require('express');
var router = express.Router();
const util = require('../helpers/util.js')


class jogos {
    constructor(qtdDezenas, totalJogos) {
        this.qtdDezenas = qtdDezenas;
        this.totalJogos = totalJogos;
    }
    set resultado(resultado) {
        this._qtdDezenas = qtdDezenas;
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
        return ArrayJogos;
    }
}

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { messages: req.flash('info') });
});

router.post('/', function(req, res) {
    var qtdDezenas = req.body.qtdDezenas
    var qtdJogos = req.body.qtdJogos
    if (qtdDezenas < 6 || qtdDezenas > 10) {
        req.flash('info', 'Você deve jogar entre 6 e 10 numeros')
        res.redirect('/')
    } else {
        var justAGuy = new jogos(qtdDezenas, qtdJogos);
        res.send(justAGuy.gerarJogo());
        /* res.render('resultado', {
            numeros: util.gerarNumerosAleatorios(qtdNumerosJogados)
        }) */
    }
})

module.exports = router;