const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    required: false,
  },
});

module.exports = mongoose.model("ToDo", todoSchema);