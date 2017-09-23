const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/newnote', (req, res) => {
  res.render('newnote');
});

module.exports = router;
