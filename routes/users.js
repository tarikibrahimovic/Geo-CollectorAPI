import express from 'express';

import {
    signInUser,
    signUpUser
} from '../controllers/user.js';

const router = express.Router();

router.post('/login', signInUser);
router.post('/register', signUpUser);

export default router;