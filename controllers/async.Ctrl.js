'use strict';
// Requires in all of the modules that we need to use
const Note = require('../models/Note.model');
const User = require('../models/User.model');
const async = require('async');

exports.homePage = (req, res) => {
  // Gather all Notes and all Users
  async.parallel(
    [
      callback => {
        const query = Note.find({});
        query
          .sort({
            createdOn: 'desc',
          })
          .limit(12)
          .exec((err, notes) => {
            callback(err, notes);
          });
      },
      callback => {
        const query = User.find({});
        query
          .sort({
            username: 1,
          })
          .exec((err, users) => {
            callback(err, users);
          });
      },
    ],
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.render('index', {
          notes: results[0],
          users: results[1],
        });
      }
    }
  );
};
