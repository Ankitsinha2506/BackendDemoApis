const express = require('express')
const { getAllUsers, createUser, updateUser, deleteUser, findUserById } = require('../Contollers/userController')
const router = express.Router()

// Route to getAllUsers.
router.get("/", getAllUsers)

// Route to create a new User.
router.post("/create", createUser);

// Route to update a user data.
router.put("/update/:id", updateUser)

// Router to Delete a User Data.
router.delete("/delete/:id", deleteUser)

// Router to find User By Id.
router.get('/:id', findUserById)

module.exports = router;