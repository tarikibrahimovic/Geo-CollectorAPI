import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        profilePicture: {
            type: String
        },
        
        name: {
            type: String
        },

        email: {
            type: String,
            required: true
        },

        password: {
            type: String, 
            required: true
        },

        profilePicture:{
            type: String
        }
    },
    { timestamps: true }
);

export default mongoose.model("User", userSchema);