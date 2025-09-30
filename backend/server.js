// const express = require('express');
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js'
// import productRouter
import bodyParser from 'body-parser';
import productRouter from './routes/productRoute.js';
const app = express();
const PORT = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// For JSON
app.use(bodyParser.json());
// api endpoint
app.use('/api/user',userRouter);
app.use('/api/product',productRouter);


// Middleware to parse JSON
app.use(express.json());
app.use(cors())

// api endpoints..
app.get('/', (req, res) => {
  res.send('Server is running...');
});


app.listen(PORT, () => {
  console.log(`Server started on:${PORT}`);
});
