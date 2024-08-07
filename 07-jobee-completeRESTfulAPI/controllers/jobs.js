const Job = require('../models/jobs')

// Get all Jobs from the API /api/jobs
exports.getJobs = (req, res, next) => {
    res.status(200).json({
        success : true,
        message : 'This route will display all jobs in future'
    })
}

// Create a new Job => /api/v1/job/new
exports.newJob = async (req,res, next) => {
    try{
        const job = await Job.create(req.body)
        res.status(200).json({
            success: true,
            message: 'Job Created',
            data: job
        })
    } catch (err) {
        throw new Error(err)
    }
}
