const express = require("express")
// import { deleteUser, test, updateUser,  getUserListings, getUser} from '../controllers/user.controller.js';
const updateUser = require("../controllers/user.controller.js")
const verifyToken = require("../utils/verifyUser.js")


const router = express.Router();
router.post('/update/:id', verifyToken, updateUser)
router.delete('/delete/:id', verifyToken, deleteUser)

module.exports = router;