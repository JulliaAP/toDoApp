const ToDoModel = require("../models/ToDoModel");

getToDo = async (req, res) => {
  const toDo = await ToDoModel.find();
  res.send(toDo);
};

saveToDo = async (req, res) => {
  const { text,  createdAt } = req.body;

  ToDoModel.create({ text, createdAt }).then((data) => {
    console.log("A tarefa foi salva...");
    console.log(data);
    res.send(data);
  });
};

updateToDo = async (req, res) => {
  const { _id, text } = req.body;
  ToDoModel.findByIdAndUpdate(_id, { text })
    .then(() => {
      res.send("A tarefa foi atualizada...");
    })
    .catch((err) => {
      console.log(err);
    });
};

deleteToDo = async (req, res) => {
  const { _id } = req.body;
  ToDoModel.findByIdAndDelete(_id)
    .then(() => {
      res.send("A tarefa foi deletada...");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getToDo,
  saveToDo,
  updateToDo,
  deleteToDo,
};