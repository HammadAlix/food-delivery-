import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
import dotenv from "dotenv";
dotenv.config();

//login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email }); // FIXED
        if (!user) {
            return res.json({ message: "User not found", success: false });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ message: "Invalid credentials", success: false });
        }
        const token = createToken(user._id);
        return res.json({
            success: true,
            message: "User logged in successfully",
            token
        });
    } catch (error) {
        console.error(error);
        return res.json({ message: "Something went wrong", success: false });
    }
}

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
}

//register user
const registerUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        //check if user exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ message: "User already exists", success: false });
        }
        //validate email
        if (!validator.isEmail(email)) {
            return res.json({ message: "Invalid email", success: false });
        }
        //password length check
        if (password.length < 8) {
            return res.json({ message: "Password must be at least 8 characters", success: false });
        }

        //hash password
        const salt = await bcrypt.genSalt(10); // FIXED
        const hashedPassword = await bcrypt.hash(password, salt); // FIXED
        //create user using hashed password
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        });

        const user = await newUser.save();
        //create token
        const token = createToken(user._id);

        return res.json({
            success: true,
            message: "User registered successfully",
            token
        });

    } catch (error) {
        console.error(error);
        return res.json({ message: "Something went wrong", success: false });
    }
}

export { loginUser, registerUser };
