var express = require('express');
var note = require('../Controllers/noteController')

const router = express.Router();


router.get('/notes' , note.getAllNotes);

router.post('/notes/save' , note.saveNote);

router.post('/notes/edit' , note.editNote);

router.delete('/notes/delete' , note.deleteNote);

module.exports= router;