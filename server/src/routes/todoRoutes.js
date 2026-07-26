import express from 'express';
const router = express.Router();
import {createTodo, getTodo} from '../controllers/todoController.js'; 

router.post('/tasks', createTodo);
router.get('/tasks', getTodo);

export default router;