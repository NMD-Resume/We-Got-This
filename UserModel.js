const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Document schema to store user information
// A "username" that is String username of user
// A "firstName" that is String firstname of user
// A "lastName" that is String lastname of user
// A "password" that is String bcrypt password of user
// A "type" that is a String of type of user, seeker(job) or hunter(employer)
// A "summary" that is a String of texts summarizing user profile
// A "portfolio" that is String Array links to user project pages
// A "skills" that is a String Array of skills user wishes to display
// An "experience" with subDocument "experienceSchema"
// An "education" with subDocument "educationSchema"
// TODO: add employer schema requirements (stage 3)
const userSchema = new Schema ({
  username: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  password: {type: String, required: true},
  type: {type: String, required: true},
  summary: String,
  portfolio: [String],
  skills: [String],
  experience: [experienceSchema],
  education: [educationSchema]
})

// SubDocument for experienceSchema
// A "start" to store String start time of experience
// An "end" to store String end time of experience
// A "content" to store String content of experience
// A "location" to store String location of experience
var experienceSchema = new Schema({
  start: String,
  end: String,
  content: String,
  location: String
})

// SubDocument for experienceSchema
// A "start" to store String start time of experience
// An "end" to store String end time of experience
// A "content" to store String content of experience
// A "location" to store String location of experience
var educationSchema = new Schema({
  start: String,
  end: String,
  content: String,
  location: String
})

module.exports = mongoose.model('UserSchema', userSchema);