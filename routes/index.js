var express = require('express');
var router = express.Router();
const util = require('../helpers/util.js')


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
            numeros: util.gerarNumerosAleatorios(qtdNumerosJogados)
        })
    }
})







module.exports = router;