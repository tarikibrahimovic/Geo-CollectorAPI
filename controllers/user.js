import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/User.js';

export const signInUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if(!existingUser) return res.status(404).json({ message: "User doesn't exist." });

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials." });

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.JWT_SALT, { expiresIn: "7d" } );

        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
}

export const signUpUser = async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if(existingUser) return res.status(400).json({ message: "User already exists." });

        if(password !== confirmPassword) return res.status(400).json({ message: "Passwords don't match."});

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

        const token = jwt.sign({ email: result.email, id: result._id }, process.env.JWT_SALT, { expiresIn: "7d" } );

        res.status(200).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
}

export const verifyJwt = async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const isCustomAuth = token.length < 500;
    let decodedData;
    if(token && isCustomAuth) {
        try {
            decodedData = jwt.verify(token, process.env.JWT_SALT);
            req.userId = decodedData?.id;
            const user = await User.findById(req.userId);
            res.status(200).json({ user });
        } catch (error) {
            res.status(500).json({ message: "Something went wrong." });
        }
    } else {
        res.status(403).json({ message: "JWT token is not valid" });
    }
}

export const changeProfilePicture = async (req, res) => {
    const { profilePicture } = req.body;

    try {
        const user = await User.findByIdAndUpdate(req.userId, { profilePicture });
        res.status(201).json({ user });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
}