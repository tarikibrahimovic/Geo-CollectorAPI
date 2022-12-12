import Marker from "../models/Marker.js";

export const getMarkers = async (req, res) => {
    try {
        const markers = await Marker.find();
        res.status(200).json({ markers });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createMarker = async (req, res) => {
    const {
        name,
        description,
        latitude,
        longitude,
        category,
        image
    } = req.body;
    try {
        const result = await Marker.create({
            name,
            description,
            latitude,
            longitude,
            category,
            image,
            author: req.userId,
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteMarker = async (req, res) => {
    const { id } = req.params;
    try {
        const marker = await Marker.findById(id);
        if (marker.author !== req.userId) {
            return res.status(401).json({ message: "Unauthorized." });
        } else {
            await Marker.findByIdAndDelete(id);
        }
        res.status(200).json({ message: "Marker deleted successfully." });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getMarkersBySearch = async (req, res) => {
    const { searchQuery } = req.query;
    try {
        const title = new RegExp(searchQuery, "i");
        const markers = await Marker.find({ name: title });
        res.status(200).json({ markers });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
