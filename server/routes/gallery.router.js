const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// Setup a POST route to add a new song to the database
router.post('/', (req, res) => {
    const newImg = req.body;
    const sqlText = `INSERT INTO "gallery" ("title", "path", "description") VALUES
    ($1, $2, $3)`;
    // Let sql sanitize your inputs (NO Bobby Drop Tables here!)
    // the $1, $2, etc get substituted with the values from the array below
    pool.query(sqlText, [newImg.title, newImg.url, newImg.description])
        .then((result) => {
            console.log(`Added song to the database`, newImg);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    const sqlText = `UPDATE gallery SET likes = likes + 1 WHERE id=$1;`
    pool.query(sqlText, [galleryId]).then((result)=>{
        res.sendStatus(200);
    })
}); // END PUT Route

// new GET from database
router.get('/', (req, res) => {
    // When you fetch all things in these GET routes, strongly encourage ORDER BY
    // so that things always come back in a consistent order 
    const sqlText = `SELECT * FROM gallery ORDER BY id ASC;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})

module.exports = router;