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

router.post('/', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    };
    notes.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    res.json(notes);
});



module.exports = router;