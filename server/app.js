import express from 'express';
const app = express();


import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './src/services/db.js';
import todoRoutes from './src/routes/todoRoutes.js';
import userRoutes from './src/routes/userRoutes.js';


dotenv.config();
app.use(cors());
app.use(express.json());


// batabase  connection
connectDB();


//routes 
app.use('/api', todoRoutes);
app.use('/api', userRoutes);

export default app;

