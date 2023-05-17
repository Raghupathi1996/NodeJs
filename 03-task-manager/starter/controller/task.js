const Task = require('../models/task')

const getAllTask = (req, res) => {
    res.send('all item from the files')
}

const createTask = (req, res) => {
    res.json(req.body)
}

const getTask = (req, res) => {
    res.json({ id: req.params.id })
}

const updateTask = (req, res) => {
    res.send('update Task')
}

const deleteTask = (req, res) => {
    res.send('delete Task')
}

module.exports = {
    getAllTask,
    createTask,
    getTask,
    updateTask,
    deleteTask
}