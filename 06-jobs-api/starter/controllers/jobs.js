const Job = require('../models/Job')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError, NotFoundError} = require('../errors')

const getAllJobs = async (req, res) => {
    const jobs = await Job.find({ createdBy: req.user.userId }).sort('createdAt')
    res.status(StatusCodes.OK).json({jobs, count: jobs.length})
}

const getJob = async (req, res) => {
    // simple extraction of the job by useriD
    // const {id} = req.params
    // const job = await Job.findById(id)
    // res.json({job})

    //finding job based on the userId and jobId together
    const {
        user: {userId}, 
        params:{id:jobId},
    } = req
    const job = await Job.findOne({
        _id:jobId, createdBy:userId
    })
    if(!job){
        throw new NotFoundError(`No jobs of ${jobId} found under ${userId}`)
    }
    res.status(StatusCodes.OK).json({job})
}

const createJob = async (req, res) => {
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({job})
}

const updateJob = async (req, res) => {
    const {
        body:{company, position},
        user:{userId}, 
        params:{id:jobId}
    } = req
    if(company === ' ' || position === ' ') {
        throw new BadRequestError('company or Position field cannot be empty')
    }
    const job = await Job.findByIdAndUpdate(
        {
            _id:jobId, createdBy:userId
        }, 
        req.body,
        { 
            new: true, // return the updated document or else returns the old document with DB updated to new value
            runValidators: true,  // ensuring that the updated data complies with the schema's rules
            upsert: true,  //if the value doesn't exist then inserts a new value
        }
    )
    res.status(StatusCodes.OK).json({job})
}

const deleteJob = async (req, res) => {
    const {
        user: {userId},
        params: {id:jobId}
    } = req
    const job = await Job.findByIdAndDelete({
        _id:jobId,
        createdBy:userId,
    })
    if(!job){
        throw new NotFoundError(`No job with id ${jobId}`)
    }
    res.status(StatusCodes.OK).send()
}
module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob,
}