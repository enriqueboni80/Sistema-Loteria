var express = require('express');
var router = express.Router();
const util = require('../helpers/util.js')
const jogos = require('../classes/jogos.js')


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
        var novoJogo = new jogos(qtdDezenas, qtdJogos).gerarJogo()
        var sorteio = util.gerarNumerosAleatorios()
        res.render('resultado', {
            numerosJogados: novoJogo,
            numerosSorteados: sorteio,
            resultado: util.compararResposta(novoJogo, sorteio)
        })
    }
})

module.exports = router;