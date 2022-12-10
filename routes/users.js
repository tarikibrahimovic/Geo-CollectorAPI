import express from 'express';

import {
    changeProfilePicture,
    signInUser,
    signUpUser,
    verifyJwt
} from '../controllers/user.js';

const router = express.Router();

router.post('/login', signInUser);
router.post('/register', signUpUser);
router.get('/verify', verifyJwt);
router.put('/profilePictureUpdate', changeProfilePicture);

export default router;