import express from 'express';

import {
    getMarkers,
    createMarker,
    deleteMarker,
    getMarkersBySearch
} from '../controllers/marker.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getMarkers);
router.post('/add', auth, createMarker);
router.delete('/delete/:id', auth, deleteMarker);
router.get('/search', getMarkersBySearch);

export default router;