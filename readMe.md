1. Initialize the Project
    npm init -y

2. Install Required Dependencies
    npm install express mongoose dotenv

3. Install Development Dependencies (optional, for better development experience)
    npm install nodemon


Simple Explanation of Each File
    server.js: Starts the server and links routes.
    config/db.js: Connects the app to MongoDB.
    models/userModel.js: Defines the structure of the User collection in MongoDB.
    controllers/userController.js: Handles logic for fetching, creating, updating, and deleting users.
    routes/userRoutes.js: Maps API endpoints to the controller functions.


server.js

    Starts the server by importing app.js and running it on a specified port.
    app.js

Configures the Express app with middlewares (bodyParser, cors) and connects to MongoDB using db.js.
Defines the main API route /api/users.
config/db.js

Connects to the MongoDB database using Mongoose.
models/userModel.js

Defines the Mongoose schema for the User collection (fields: name, email, password).
controllers/userController.js

Handles CRUD operations:
    getUsers: Fetch all users.
    getUserById: Fetch a user by ID.
    createUser: Add a new user.
    updateUser: Update an existing user by ID.
    deleteUser: Remove a user by ID.
    routes/userRoutes.js

Maps HTTP routes (GET, POST, PUT, DELETE) to corresponding controller functions.
Run and Test
Start the app with node server.js.
Test API endpoints like /api/users using Postman or any API client.