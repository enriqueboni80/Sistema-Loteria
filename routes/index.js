var express = require('express');
var router = express.Router();
const util = require('../helpers/util.js')


class jogos {
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
        var novoJogo = new jogos(qtdDezenas, qtdJogos);
        res.render('resultado', {
            numerosJogados: novoJogo.gerarJogo(),
            numerosSorteados: util.gerarNumerosAleatorios(),
            teste: compararResposta(novoJogo.gerarJogo(), util.gerarNumerosAleatorios())
        })
    }
})

function compararResposta(jogos, numerosSorteados) {
    var resultado = 0
    jogos.forEach(jogo => {
        jogo.forEach(numeroJogado => {
            numerosSorteados.forEach(numeroSorteado => {
                if (numeroSorteado == numeroJogado) {
                    resultado = 1
                }
            });
        });
        return resultado
    });
}



module.exports = router;