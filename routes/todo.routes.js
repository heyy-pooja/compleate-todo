
const router = require("express").Router()
const todoController = require("../controller/todo.controller")
const { userProtected } = require("../middlewares/auth.middleware")

router
    .get("/get-todo", userProtected, todoController.getAllTods)
    .post("/add-todo", userProtected, todoController.addTodo)
    .put("/update/:id", userProtected, todoController.updateTodo)
    .delete("/delte/:id", userProtected, todoController.deleteTodo)

module.exports = router