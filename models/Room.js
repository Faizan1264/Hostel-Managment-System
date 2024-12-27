const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const RoomSchema = new Schema({
  id: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    enum: ['CLEANING', 'REPAIR']
  },
  block: {
    type: String,
    enum: ['MM HALL', 'SULAIMAN HALL', 'HABIB HALL', 'VM HALL'],
    required: true,
    trim: true
  },
  incharge: {
    type: String,
    trim: true,
  },
  time: {
    type: String,
    trim: true,
    required: true
  },
  gender: {
    type: String,
    // enum: ['BOY', 'GIRL'],
     enum: ['Urgent', 'Routine'],
    required: true,
  }
});

module.exports = Student = mongoose.model("room", RoomSchema);
