
const mongoose = require("mongoose")

const listingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    regularPrice: {
      type: Number,
      required: true,
    },
    discountPrice: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    furnished: {
      type: Boolean,
      // required: true,
      required: false,
    },
    parking: {
      type: Boolean,
      // required: true,
      required: false,
    },
    type: {
      type: String,
      // required: true,
      required: false,
    },
    offer: {
      type: Boolean,
      // required: true,
      required: false,
    },
    imageUrls: {
      type: Array,
      // required: true,
      required: false,
    },
    userRef: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;