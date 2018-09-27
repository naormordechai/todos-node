const mongoService = require('./mongo-service');

const ObjectId = require('mongodb').ObjectId;

function query() {
    return mongoService.connect()
        .then(db => {
            const collection = db.collection('todos')
            return collection.find({}).toArray()
        })
}

function add(todo) {
    return mongoService.connect()
        .then(db => {
            const collection = db.collection('todos')
            return collection.insertOne(todo)
                .then(_ => {
                    return todo
                })
        })
}

function getById(todoId) {
    todoId = new ObjectId(todoId);
    return mongoService.connect()
        .then(db => {
            const collection = db.collection('todos')
            return collection.findOne({ _id: todoId })
        })
}

function removeTodo(todoId) {
    todoId = new ObjectId(todoId)
    return mongoService.connect()
        .then(db => {
            const collection = db.collection('todos');
            return collection.remove({ _id: todoId })
        })
}

module.exports = {
    query,
    add,
    getById,
    removeTodo
}