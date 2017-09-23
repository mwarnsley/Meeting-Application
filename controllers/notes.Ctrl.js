'use strict';
// Requires in all of the modules that we need to use
const Note = require('../models/Note.model');
const User = require('../models/User.model');

exports.allUsersNotes = (req, res) => {
  // Find all of the users
  User.find({})
    .sort({
      username: 1,
    })
    .exec((err, users) => {
      if (err) {
        console.log('Error getting users');
      } else {
        return res.render('newnote', {
          title: 'New Note',
          users,
        });
      }
    });
};

exports.createNote = (req, res) => {
  // Creating a new note
  const newNote = new Note();
  // Attaching all the properties from the view
  newNote.memberName = req.body.memberName;
  newNote.project = req.body.project;
  newNote.workYesterday = req.body.workYesterday;
  newNote.workToday = req.body.workToday;
  newNote.impediment = req.body.impediment;

  newNote.save(err => {
    if (err) {
      const errMsg = `Sorry, there was an error saving: ${err}`;
      res.render('newnote', {
        title: 'Note - new note(error)',
        message: errMsg,
      });
    } else {
      console.log('Meeting note has been saved');
      res.redirect(301, '/');
    }
  });
};
