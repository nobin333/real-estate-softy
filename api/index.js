const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const mongoose = require("mongoose")

const authRouter = require("../api/routes/auth.route")

// import userRouter from './routes/user.route.js';
// import authRouter from './routes/auth.route.js';
// import listingRouter from './routes/listing.route.js';

dotenv.config()

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });


const app = express()

app.use(express.json());

// app.use(cookie-parser());

// app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
// app.use('/api/listing', listingRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});