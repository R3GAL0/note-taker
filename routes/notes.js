const router = require('express').Router();
// const db = require('./../db/db.json');
const fs = require('fs');
const {v4:uuidv4} = require('uuid');

router.get('/', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) {
            throw err;
        }
        let notes = JSON.parse(data);
        res.json(notes)
    });

});

module.exports = router;