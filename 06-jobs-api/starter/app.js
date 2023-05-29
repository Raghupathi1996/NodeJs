require('dotenv').config();
require('express-async-errors'); // library for handling try and catch by default
const express = require('express');
const app = express();

// connectDB
const connectDB = require('./db/connect')
const authenticateUser = require('./middleware/authentication')

//routers
const authRouter = require('./routes/auth')
const jobsRouter = require('./routes/jobs')


// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());
// extra packages

//routes
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', authenticateUser, jobsRouter)


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;


const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
    console.log(`Server is listening on port ${port}....`)
    )
    // app.get('/', (req, res) => {
    //   console.log("Connected");
    //   res.send('HI')
    // })
  } catch (error) {
    console.log(error);
  }
};

start();


// MONGO_URI=mongodb+srv://raghupathijan01:India9900228680@cluster0.8tmq5i6.mongodb.net/06-JOBS-API?retryWrites=true&w=majority&ssl=true
// JWT_SECRET='u8x/A?D(G+KbPeShVmYp3s6v9y$B&E)H'
// JWT_LIFETIME = '30d'
