
// Get all Jobs from the API /api/jobs
exports.getJobs = (req, res, next) => {
    res.status(200).json({
        success : true,
        message : 'This route will display all jobs in future'
    })
}

// Create a new Job => /api/v1/job/new
// exports.newJob = (req, )