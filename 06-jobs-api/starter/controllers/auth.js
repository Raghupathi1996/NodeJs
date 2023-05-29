const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors')
const bcrypt = require('bcryptjs') // library used for hashing the password
const jwt = require('jsonwebtoken')


const register = async (req, res) => {
    // const { name, email, password } = req.body
    // if(!name || !email || !password) {
    //     throw new BadRequestError('Please provide all name, email, and password')
    // } // BadRequestValidator used

    // the mongoDB validor will be used in this project
    const user = await User.create({...req.body})
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({user:{name: user.getName()}, token})
}

const login = async (req, res) => {

    const { email, password } = req.body

    if(!email || !password) {
        throw new BadRequestError(' Please provide email and password')
    }

    const user = await User.findOne({email})
    console.log(user);

    if(!user) {
        throw new UnauthenticatedError('Invalid credentials')
    }

    //compare password
    const isPasswordCorrect  = await user.comparePassword(password)
    if(!isPasswordCorrect) {
        throw new UnauthenticatedError('Invalid credentials')
    }
    
    // const token = jwt.sign({id, name}, process.env.JWT_SECRET, {
    //     expiresIn: '5m'
    // })
    const token = user.createJWT()
    res.status(StatusCodes.OK).json({user:{name:user.name}, token})
}

module.exports = {
    register,
    login
}