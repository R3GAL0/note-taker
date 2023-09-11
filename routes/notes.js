const router = require('express').Router();
// const db = require('./../db/db.json');
const fs = require('fs');
const {v4:uuidv4} = require('uuid');

// retireves and displays the notes
router.get('/', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) {
            throw err;
        }
        let notes = JSON.parse(data);
        res.json(notes)
    });

});

// places new notes into the data base
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

// removes a note from the database
router.delete('/:id', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));
    const newNotes  = notes.filter((note) => {
        return note.id !== req.params.id;
    });
    fs.writeFileSync('./db/db.json', JSON.stringify(newNotes));
    res.json(notes)
});


module.exports = router;