import mongoose from 'mongoose';

const markerSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },

        image: {
            type: String,
            required: true
        },
        
        description: {
            type: String
        },

        latitude: {
            type: Number,
            required: true
        },

        longitude: {
            type: Number,
            required: true
        },

        category: {
            type: String,
            required: true
        },

        author: {
            type: String,
        }
    },
    { timestamps: true }
);

export default mongoose.model("Marker", markerSchema);