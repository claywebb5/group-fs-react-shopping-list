const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

router.get('/', (req, res) => {
    const sqlText = 'SELECT * FROM "list" ORDER BY "item" ASC;';
    pool.query(sqlText)
        .then((result) => {
            console.log('response', res);
            res.send(result.rows);
        }).catch((error) => {
            console.log('Error:', error);
            res.sendStatus(500);
        });


});


module.exports = router;