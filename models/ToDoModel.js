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

  prazo: {
    type: Date,
    required: false, // vai adicionar a data e a hora do input
  },

  completo: {
    type: Boolean,
    default: false, // vai adicionar se a tarefa foi comprida ou não
  },

  data: {
    type: Date,
    default: Date.now, // adiciona a data e hora atuais por padrão
    required: false,
  },
});


module.exports = mongoose.model("ToDo", todoSchema);
