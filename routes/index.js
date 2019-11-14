var express = require('express');
var router = express.Router();

function ehRepetido(result, numero) {
    var found = false
    result.forEach(element => {
        if (element == numero) {
            found = true
        }
    });
    return found
}

function gerarNumerosAleatorios(qtdNumerosJogados) {
    var result = []
    while (result.length < qtdNumerosJogados) {
        var numero = Math.floor(Math.random() * 52) + 1
        if (!ehRepetido(result, numero)) {
            result.push(numero)
        }
    }
    return result
}

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { messages: req.flash('info') });
});

router.post('/', function(req, res) {
    var qtdNumerosJogados = req.body.qtdNumeros
    if (qtdNumerosJogados < 6 || qtdNumerosJogados > 15) {
        req.flash('info', 'deu pau')
        res.redirect('/')
    } else {
        res.render('resultado', {
            numeros: gerarNumerosAleatorios(qtdNumerosJogados)
        })
    }
})











module.exports = router;