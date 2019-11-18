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
    } else if (qtdJogos <= 0) {
        req.flash('info', 'A quantidade de jogos deve ser maior que Zero')
        res.redirect('/')
    } else {
        var novoJogo = new jogos(qtdDezenas, qtdJogos)
        novoJogo.gerarJogo()
        novoJogo.resultado = util.gerarNumerosAleatorios()
        res.render('resultado', {
            numerosJogados: novoJogo.jogos,
            numerosSorteados: novoJogo.resultado,
            resultado: util.compararResposta(novoJogo.jogos, novoJogo.resultado)
        })
    }
})

module.exports = router;