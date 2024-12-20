const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,)
        console.log('MongoDB connected successfully');

    } catch (error) {
        console.error(error.message)
        process.exit(1) // exit the process with a non-zero status code
    }
}


module.exports = connectDB