import Comment from '../models/Comment.js';

export const createComment = async (req, res) => {
    const { text, markerId } = req.body;

    try {
        const result = await Comment.create({ text, markerId, userId: req.userId });
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
}

export const getCommentsForMarker = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await Comment.find({ markerId: id });
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
}

export const deleteComment = async (req, res) => {
    const { id } = req.params;

    try {
        const comment = await Comment.findById(id);
        if (comment.authorId !== req.userId) {
            return res.status(401).json({ message: "Unauthorized." });
        } else {
            await Comment.findByIdAndDelete(id);
        }
        res.status(201).end();
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
}