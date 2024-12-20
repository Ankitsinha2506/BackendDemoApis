const User = require("../Models/userModel");

// Create a User.
const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = new User({
            name,
            email,
            password,
        });
        await newUser.save();
        res.status(201).json({
            status: "success",
            data: newUser
        })
    } catch (err) {
        console.log("Error Creating User : ", err);
        res.status(500).json({
            "message": "Error Creating User",
            "error": err
        })
    }
}

// Fetch All User Data.
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(201).json({
            status: "success",
            data: users
        })
    } catch (err) {
        console.log("Error Fetching User : ", Error);
        res.status(500).json({
            "message": "Error Fetching User",
            "error": err
        })
    }
}

// Update User.
const updateUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                name, email, password,
            }, { new: true, runValidators: true, } // Returns updated and Validates the data.
        )

        if (!updatedUser) {
            return res.status(404).json({
                status: "fail",
                message: "User not found"
            })
        }
    } catch (err) {
        console.log("Error Updating User : ", err);
        res.status(500).json({
            "message": "Error Updating User",
            "error": err
        })
    }
}

// Delete User.
const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id)
        if (!deletedUser) {
            return res.status(404).json({
                status: "fail",
                message: "User not found"
            })
        }
    }
    catch (err) {
        console.log("Error Deleting User : ", err);
        res.status(500).json({
            "message": "Error Deleting User",
            "error": err
        })
    }
}

// Find User By Id.
const findUserById = async (req, res) => {
    try {
        const foundUserById = await User.findById(req.params.id)
        if (!foundUserById) {
            return res.status(404).json({
                status: "fail",
                message: "User not found"
            })
        }
    } catch (err) {
        console.log("Error Finding User By Id : ", err);
        res.status(500).json({
            "message": "Error Finding User By Id",
            "error": err
        })
    }
}

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    findUserById

}