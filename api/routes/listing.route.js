const express = require("express")
// import { createListing, deleteListing, updateListing, getListing, getListings } from '../controllers/listing.controller.js';
const verifyToken = require("../utils/verifyUser.js");
const createListing = require("../controllers/listing.controller.js");

const router = express.Router();

router.post('/create', verifyToken, createListing);

module.exports = router;