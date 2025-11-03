const mongoose = require('mongoose')

const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME_1,
  MONGO_HOSTNAME_2,
  MONGO_PORT_1,
  MONGO_PORT_2,
  MONGO_DB,
  MONGO_DB_REPLICATION_SET,
} = process.env;

const options = {
   useNewUrlParser: true,
   useCreateIndex: true,
   userFindAndModify: false,
   useUnifiedTopology: true
};

let url;
const environment = process.env.ENVIRONMENT.toLowerCase();

switch (environment) {
case 'development-docker': {
  console.log("Development-docker!!!!!")
  url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME_1}:${MONGO_PORT_1}/${MONGO_DB}?authSource=admin`;
  break;
}
case 'production': {
  console.log("Production**")
  url = process.env.MONGO_URI;
  break;
}
case 'development': {
  console.log("Development!!!!!")
  url = process.env.MONGO_URI;
  break;
}
default: {
  url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME_1}:${MONGO_PORT_1}/${MONGO_DB}?authSource=admin`;
  break;
}
}

const connectDB = async() => {
    mongoose.connect(url, options).then(() => {
    console.log('Connected to MongoDB!');
  }).catch((err) => {
    console.log(`MongoDB connection error. Please make sure MongoDB is running. ${err}`);
    process.exit();
  });
}

module.exports = connectDB

