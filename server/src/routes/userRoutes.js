import express from 'express';
const router = express.Router();

import {userSignup} from '../controllers/userController.js';

router.post('/signup', userSignup);

export default router;