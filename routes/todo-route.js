const todoService = require('../services/todos-service');

function addTodoRoutes(app) {

    app.get('/todo', (req, res) => {
        todoService.query()
            .then(todos => res.json(todos))
    })

    app.post('/todo', (req, res) => {
        const todo = req.body
        todoService.add(todo)
            .then(todo => res.json(todo))
    })

    app.get('/todo/:id', (req, res) => {
        todoService.getById(req.params.id)
            .then(todo => res.json(todo))
    })

    app.delete('/todo/:id', (req, res) => {
        todoService.removeTodo(req.params.id)
            .then(_ => res.end(req.params.id))
    })
}

module.exports = addTodoRoutes;