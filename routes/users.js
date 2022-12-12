import express from 'express';

import {
    changeProfilePicture,
    signInUser,
    signUpUser,
    verifyJwt
} from '../controllers/user.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/login', signInUser);
router.post('/register', signUpUser);
router.get('/verify', verifyJwt);
router.put('/profilepic', auth, changeProfilePicture);


export default router;