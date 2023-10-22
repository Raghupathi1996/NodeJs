const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, 'Please enter the Job title'],
        trim : true,
        maxlength : [100, 'Job title cannot exceed 100 character']
    },
    slug : String,
    description : {
        type : String,
        required : [true, 'Please enter Job description'],
        maxlength : [1000, 'Job description cannot exceed 1000 character']
    },
    email : {
        type : String,
        validate : [validator.isEmail, 'Please add a valid email address']
    },
    address : {
        type : String,
        required : [true, 'Please add an address']
    },
    company : {
        type : String,
        required : [true, 'Please add company name']
    },
    industry : {
        type : String,
        required : true,
        enum : {
            values : [
                'Business',
                'Information Technology',
                'Banking',
                'Education/Training',
                'Telecommunication',
                'Others'
            ],
            message : 'Please select correct option for industry'
        }
        
    },
    jobType : {
        type :  String,
        required : true,
        enum : {
            values : [
                'Permanent',
                'Temporary',
                'Internship'
            ],
            message : 'Please select correct options for job type'
        }
    },
    minEducation : {
        type : String,
        required : true,
        enum : {
            values : [
                'B.C.A',
                'B.Tech',
                'B.E',
                'M.Tech',
                'M.C.A',
                'PhD'
            ],
            message : ',Please select the correct options for Education'
        }
    },
    position : {
        type : String,
        required : true,
        enum : {
            values : [
                'No Experience',
                '1 Year or less',
                '1 Year - 2 Year',
                '2 Year - 5 Year',
                '5 Years+'
            ],
            message : 'Please select correct options for Experience'
        }
    },
    salary : {
        type : Number,
        required : [true, 'Please enter expected salary for this Job']
    },
    postingDate : {
        type : Date,
        default : Date.now
    },
    lastDate : {
        type : Date,
        default : new Date().setDate(new Date().getdate() + 7)
    },
    applicantsApplied : {
        type : [Object],
        select : false
    }
})

module.exports = mongoose.model('Jobs', jobSchema)

