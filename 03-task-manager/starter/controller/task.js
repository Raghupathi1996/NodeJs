const Task = require('../models/task')
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custom-error')
const getAllTask = asyncWrapper(async (req, res) => {
        const tasks = await Task.find({})
        res.status(200).json({tasks}) // for the current project it is compatable as the same standards
        //  is used in all the routes
        // res.status(200).json({status: "success", data: { tasks, nbHits: tasks.length} }) // this is the 
        // general standards that has to be followed but adds and extra level of declearation in the frontend browser-app.js file
})

const createTask = asyncWrapper(async (req, res) => {
        const task = await Task.create(req.body)
        res.status(201).json({task})
})

const getTask = asyncWrapper(async (req, res, next) => {
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        if(!task){
            // const error = new Error('Not Found')
            // error.status = 404
            // return next(error)
            return next(createCustomError(`No task with ID:${taskID}`,404))
            // return res.status(404).json({msg: `No task with ID:${taskID}`})
        }
        res.status(200).json({task})
})

const updateTask = asyncWrapper(async (req, res) => {
        const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {
            new:true, 
            runValidators:true,
        })
        if(!task) {
            return next(createCustomError(`No task with ID:${taskID}`,404))
            // return res.status(404).json({msg: `No task with id:${taskID}`})
        }
        res.status(200).json({task})
})

const deleteTask = asyncWrapper(async (req, res) => {
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task) {
            return next(createCustomError(`No task with ID:${taskID}`,404))
            // return res.status(404).json({ msg: `No task with ID:${taskID}`})
        }
        res.status(200).json({task})
})

module.exports = {
    getAllTask,
    createTask,
    getTask,
    updateTask,
    deleteTask
}