const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  grade: { type: String, required: true },
});

module.exports = mongoose.model('User', employeeSchema );

