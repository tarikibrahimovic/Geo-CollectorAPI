import mongoose from 'mongoose';

const photoSchema = new mongoose.Schema(
    {
        title: {
            type: String
        },

        photo: {
            type: String
        },
        
        description: {
            type: String
        },

        category: {
            type: String
        },

        userId: {
            type: String
        }
    },
    { timestamps: true }
);

export default mongoose.model("Photo", photoSchema);