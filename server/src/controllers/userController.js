import userModel from '../model/userModel.js';
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '7d'
    });
};

const userSignup = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // check user already exist
        const exist = await userModel.findOne({ email });

        if (exist) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields"
            });
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({
                success: false,
                message: "Please enter a valid email"
            });
        }

        if (!validator.isStrongPassword(password)) {
            return res.status(400).json({
                success: false,
                message: "Please enter a strong password"
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashPassword
        });

        const user = await newUser.save();

        const token = createToken(user._id);

        return res.status(201).json({
            success: true,
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export { userSignup };