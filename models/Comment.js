import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    authorId: {
        type: String,
        required: true
    },

    markerId: {
        type: String,
        required: true
    },

    text: {
        type: String,
        required: true
    },
}, { timestamps: true });

export default mongoose.model("Comment", commentSchema);