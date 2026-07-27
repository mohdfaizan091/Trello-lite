import express from 'express';
const router = express.Router();
import {createTodo, getTodo, getTodoById} from '../controllers/todoController.js'; 

router.post('/tasks', createTodo);
router.get('/tasks', getTodo);
router.get('/tasks/:id', getTodoById);


export default router;