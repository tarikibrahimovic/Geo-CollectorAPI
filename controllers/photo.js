import Photo from '../models/Photo.js';
import streamifier from 'streamifier';
import cloudinary from '../utils/cloudinary.js';

export const uploadImage = async (req, res) => {
    try {
        

        res.status(200).json({
            message: 'Image uploaded successfully',
            data: result
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}