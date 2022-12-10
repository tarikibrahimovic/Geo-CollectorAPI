import express from 'express';

import {
    createComment, 
    getCommentsForMarker,
    deleteComment
} from '../controllers/comment.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/add', auth, createComment);
router.get('/:id', getCommentsForMarker);
router.delete('/delete/:id', auth, deleteComment);

export default router;