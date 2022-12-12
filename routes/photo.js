import express from 'express';
import multer from 'multer';

import {
    uploadImage
} from '../controllers/photo.js';

const router = express.Router();
const fileUpload = multer();

router.post('/upload', fileUpload.single('image'),uploadImage);
// router.delete('/delete', deleteImage);

export default router;