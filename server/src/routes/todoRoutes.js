import express from 'express';
const router = express.Router();
import {createTodo, getTodo, getTodoById, updateTodoById, deleteById} from '../controllers/todoController.js'; 

router.post('/tasks', createTodo);
router.get('/tasks', getTodo);
router.get('/tasks/:id', getTodoById);
router.put('/tasks/:id', updateTodoById);
router.delete('/tasks/:id', deleteById);


export default router;