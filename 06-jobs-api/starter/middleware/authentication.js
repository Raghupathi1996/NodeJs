const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors')
const User = require('../models/User')

const auth = async (req, res, next) => {
    const authHeader = req.headers.authorization
    
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new UnauthenticatedError('Authentication Invalid')
    }

    const token = authHeader.split(' ')[1]
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)

        //alterantive code 
        // const user = await User.findById(payload.userID).select('-password');
        // req.user = user

        req.user = {userId:payload.userID, name:payload.username}
        next()
    } catch (error) {
        throw new UnauthenticatedError("Authentication Invalid")
    }
}

module.exports = auth