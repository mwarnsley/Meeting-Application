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
