const express = require('express');
const router = express.Router();


/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
    });

router.get('/test', (req, res) => {
    res.send('Coucou');
    });


    module.exports = router;
