require('dotenv').config();
require('express-async-errors'); // library for handling try and catch by default

//extra security packages
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean') //sanitize user input and protect against malicious script injections.
const rateLimiter = require('express-rate-limit')

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
app.set('trust proxy', 1)
app.use(rateLimiter({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})) // error code that this would send is 429 with message "too many responses"
app.use(helmet())
app.use(cors())
app.use(xss())

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
