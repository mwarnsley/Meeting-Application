const mongoose = require('mongoose');
const {Schema} = mongoose;

// Function to validate that there is a username that has been clicked on
var memberNameValidator = [
  val => {
    return val.length > 0 && val != '(Select Name)';
  },
  'Select a Valid Member Name',
];

const NoteSchema = new Schema({
  memberName: {
    type: String,
    validate: memberNameValidator,
  },
  project: {
    type: String,
    required: true,
  },
  workYesterday: {
    type: String,
    required: true,
  },
  workToday: {
    type: String,
    required: true,
  },
  impediment: {
    type: String,
    required: true,
    default: 'none',
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Note', NoteSchema);
