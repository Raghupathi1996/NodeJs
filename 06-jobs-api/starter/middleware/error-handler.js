const { CustomAPIError } = require('../errors')
const { StatusCodes } = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    //set to default 
    statuscode:err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong try again later',
  }
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  if(err.code && err.code === 11000){
    customError.msg = `Duplicate value entered for ${Object.key(err.keyValue)} field, please choose another value for the field`
    customError.statuscode = 400
  }
  // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })
    return res.status(customError.statuscode).json( customError.msg )

}

module.exports = errorHandlerMiddleware
