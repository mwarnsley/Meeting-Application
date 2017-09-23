const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
  username: String,
  password: String,
});

UserSchema.pre('save', next => {
  // Capitalize the username
  this.username.charAt(0).toLocalUpperCase() + this.username.slice(1);
  next();
});

module.exports = mongoose.model('User', UserSchema);
