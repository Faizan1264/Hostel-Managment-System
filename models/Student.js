const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const StudentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  batch: {
    type: Number,
    required: true,
    min: 2020,
    max: 2024

  },
  // id: {
  //   type: String,
  //   unique: true,
  // },
  id: {
    type: String,
    unique: true,
    required: true,
    match: /^[a-zA-Z]{2}\d{4}$/i,  // Case-insensitive regex for two letters followed by four digits
  },
  room: {
    type: String,
  },
  // block: {
  //   type: String,
  //   // enum: ['A', 'B', 'C', 'D'],
  //   enum: ['Saifi', 'Hali', 'MMA', 'Amin'],
  //   trim: true,
  //   required: true,
  // },
  block: {
    type: String,
    enum: ['saifi', 'hali', 'mma', 'amin'], // Lowercase enum values
    trim: true,
    required: true,
    set: value => value.toLowerCase(), // Convert input to lowercase
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  gender: {
    type: String,
    enum: ['MALE', 'FEMALE'],
    required: true,
  }
});

module.exports = Student = mongoose.model("student", StudentSchema);
