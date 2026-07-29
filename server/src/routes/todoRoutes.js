import express from 'express';
const router = express.Router();
import {createTodo, getTodo, getTodoById, updateTodoById, deleteById} from '../controllers/todoController.js';
import  requireAuth  from "../middlewares/auth.js"; 

router.post('/tasks', requireAuth, createTodo);
router.get('/tasks', requireAuth, getTodo);
router.get('/tasks/:id', requireAuth, getTodoById);
router.put('/tasks/:id', requireAuth, updateTodoById);
router.delete('/tasks/:id', requireAuth, deleteById);


export default router;