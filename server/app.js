import express from 'express';
const app = express();


import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './src/services/db.js';
import todoRouter from './src/routes/todoRoutes.js';


dotenv.config();
app.use(cors());
app.use(express.json());


// batabase  connection
connectDB();


//routes 
app.use('/api', todoRouter);

export default app;

