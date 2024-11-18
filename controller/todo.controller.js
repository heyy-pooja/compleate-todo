const Todo = require("../model/Todo")


exports.getAllTods = async (req, res) => {
    const result = await Todo.find({ userId: req.user })
    res.json({ message: "Fetch All Todos Success", result })
}
exports.addTodo = async (req, res) => {
    await Todo.create({ ...req.body, userId: req.user })
    res.json({ message: "Add Todo Success" })
}
exports.updateTodo = async (req, res) => {
    await Todo.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: "Update Todo Success" })
}
exports.deleteTodo = async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id)
    res.json({ message: "Delete Todo Success" })
}