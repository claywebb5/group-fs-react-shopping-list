// =================== SETUP ROUTER ==========================

const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// =================== GET ROUTER ============================
// #region
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
// #endregion

// =================== POST ROUTER ============================
// #region
router.post ('/', (req, res) => {
    // const list = req.body;
    console.log('req.body is:', req.body);
    
    const sqlText = `INSERT INTO "list" (item, quantity, unit)
                     VALUES ($1, $2, $3)`;
    pool.query(sqlText, [req.body.item, req.body.quantity, req.body.unit])
    .then((result) =>{
        console.log('list', req.body.item);
        res.sendStatus(201);
    }).catch((error) =>{
        console.log('Error in database query', error);
        res.sendStatus(500);
    })
                    
});
// #endregion

// =================== PUT ROUTER ===========================
// #region

router.put('/:id', (req,res) => {
    let id = req.params.id;
    console.log('Router.put id is:', id);
    const sqlText = `UPDATE "list" 
                    SET "purchased" = true
                    WHERE "id" = $1;
                    `;
    pool.query(sqlText, [id])
        .then((result) => {
            console.log('In put.then res is:', result);
         res.sendStatus(201);
     }).catch((err) => {
         console.log('Error in put.catch:', err);
         res.sendStatus(500);
     });
})
// #endregion

// =================== DELETE ROUTER ==========================
// #region

router.delete('/:id', (req, res) => {
    let reqID = req.params.id;
    console.log('in DELETE router, id:', reqID);
    let sqlText = `DELETE FROM "list" WHERE "id" = $1;`;
    pool.query(sqlText, [reqID])
    .then((result) => {
        console.log('in Delete .then', result);
        res.sendStatus(201);
    }).catch((err) => {
        console.log('in Delete .catch', err);
        res.sendStatus(500)
    })
    
})
// #endregion

// =================== EXPORTS ==========================

module.exports = router;
