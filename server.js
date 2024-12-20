const express = require('express')
const dotenv = require('dotenv');
const connectDB = require('./dbConfig/db');
const userRoute = require('./Routes/userRoute')

dotenv.config();

const app = express()

// connect to MongoDB
connectDB();

// middleware
app.use(express.json())

// Routes
app.use('/api/users', userRoute)

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})