const express = require('express')
const fs = require('fs')
// fs allows to write files
const router = express.Router()
const path = require('path')
const uuid = require('../helpers/uuid');
// handles encrypted data
// randomUUID generates random value

let db = require('../db/db.json')
// connects db.json file

router.get('/notes', (req, res) => {
    console.log(`${req.method} request recieved`)
    let notes = JSON.parse(fs.readFileSync('./db/db.json'))

    res.status(200).json(notes)
    console.log('received notes')
});

router.post('/notes', (req, res) => {
    console.log(`${req.method} request recieved`)

    const {title, text} = req.body;

    const newNote = {
        note_id: uuid(),
        title,
        text,
    }
    let notes = JSON.parse(fs.readFileSync('./db/db.json'))

    notes.push(newNote)

    fs.writeFileSync('./db/db.json', JSON.stringify(notes, null, 2));
   
    res.json(notes);
    console.log('note created')

});

module.exports = router