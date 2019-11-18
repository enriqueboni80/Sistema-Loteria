var express = require('express');
var router = express.Router();
const util = require('../helpers/util.js')


class jogo {
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
        let jogo = util.gerarNumerosAleatorios(this.qtdDezenas);
        return jogo;
    }


    sayHello() {
        console.log('Hello, my name is ' + this.qtdDezenas);
    }
}

/* GET home page. */
router.get('/', function(req, res, next) {
    var justAGuy = new jogo(7, 2);
    justAGuy.jogos = '6';
    console.log(justAGuy.gerarJogo());

    //res.render('index', { messages: req.flash('info') });
});

router.post('/', function(req, res) {
    var qtdNumerosJogados = req.body.qtdNumeros
    if (qtdNumerosJogados < 6 || qtdNumerosJogados > 15) {
        req.flash('info', 'deu pau')
        res.redirect('/')
    } else {
        res.render('resultado', {
            numeros: util.gerarNumerosAleatorios(qtdNumerosJogados)
        })
    }
})

module.exports = router;