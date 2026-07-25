import express from 'express';
const router = express.Router();
import {createTodo} from '../controllers/todoController.js'; 

router.post('/tasks', createTodo);

export default router;