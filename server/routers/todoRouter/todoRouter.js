const Router = require("express");
const Todo = require("../../db/models/todo.model");

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const sort = req.query.sort;
    const page = req.query.page || 0;
    const todosPerPage = 3;
    const todos = await Todo.find().skip(page * todosPerPage).limit(todosPerPage);
    const todosQuantity = await Todo.countDocuments({}).exec();
    const totalPages = Math.ceil(todosQuantity / 3)
    res.status(200).json({todos, totalPages});
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong" });
  }
});
router.post("/", async (req, res) => {
  try {
    const { email, userName, description } = req.body;
    const todo = new Todo({ email, userName, description });
    await todo.save();
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong" });
  }
});
router.put("/done/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { done } = req.body;
    Todo.findByIdAndUpdate(id, { done }, {new: true});
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong" });
  }
});
router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    Todo.findByIdAndUpdate(id, { description });
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong" });
  }
});
module.exports = router;
