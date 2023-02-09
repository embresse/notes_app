const express = require('express');
const router = express.Router();
const path = require('path');
// connects necessary paths 

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/notes.html'))
});
// returns notes.html file

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
//returns index.html file

// middleware to connect different routes
module.exports = router;