var express = require('express');
var router = express.Router();

/* GET api listing. */
router.get('/', function (req, res) {

    res.send('api works');
});

/**
 * GET pour avoir toutes les questions existantes
 */
router.get('/questions', function (req, res) {
    res.send("Coucou tu veux voir mes questions");
});

/**
 * GET pour avoir une question
 */
router.get('/question/:id', function (req, res) {
    // console.log(req);
    // console.log(req.query);
    // console.log(req.body);
    // console.log(req.parms);

    var params = req.params;
    res.send("Coucou tu veux voir ma question n°" + params.id);
});

/**
 * POST d'une question
 */
router.post('/question', function(req, res){

    res.send("Coucou, tu créé une question");
});

/**
 * POST d'une réponse à une question
 */
router.post('/question/:id/response', function(req, res){
    var params = req.params;
    res.send("Coucou, tu répond à une question dont l'id est " + params.id);
});

module.exports = router;

/**
 *  Ajouter une question
 *  Récuperer la ou les qustions
 *  répondre à une quzstion
 */
