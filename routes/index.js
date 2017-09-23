// Requiring in the modules and getting the router from express
const express = require('express');
const router = express.Router();
const notesCtrl = require('../controllers/notes.Ctrl');

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/newnote', notesCtrl.allUsersNotes);

module.exports = router;
