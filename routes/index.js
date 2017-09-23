// Requiring in the modules and getting the router from express
const express = require('express');
const router = express.Router();
const notesCtrl = require('../controllers/notes.Ctrl');
const asyncCtrl = require('../controllers/async.Ctrl');

router.get('/', asyncCtrl.homePage);
router.get('/newnote', notesCtrl.allUsersNotes);
router.post('/newnote', notesCtrl.createNote);

module.exports = router;
