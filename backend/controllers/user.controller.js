import jwt from "jsonwebtoken";
import { UserModel } from "../models/user.model.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

export const signup_user = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Something is missing!",
    });
  }

  try {
    // check if user already exists
    const existUser = await UserModel.findOne({ email: email });

    if (existUser) {
      return res.status(400).json({
        success: false,
        message: "User Already Exists",
      });
    }

    // if not, then create new user
    const encryptedPassword = await bcrypt.hash(password, 10);
    const newUser = await UserModel({
      email,
      password: encryptedPassword,
      name,
    });

    await newUser.save();

    return res.status(201).json({
      success: false,
      message: "Sign-up Successfully.",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

// login
export const login_user = async (req, res) => {
  const { email, password } = req.body;

  // console.log("email : ", email, password);
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Something is Missing.",
    });
  }

  try {
    // check the user exist or not
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User Does not exists",
      });
    }

    const isValidUser = await bcrypt.compare(password, user.password);

    if (!isValidUser) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    // Generate JWT token with expiration time
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1h", // Token expires in 1 hour
      }
    );

    // Set cookie with token
    res.cookie("token", token, {
      httpOnly: true, // Prevents XSS attacks
      sameSite: "strict", // Prevent CSRF attacks
      maxAge: 3600000, // 1 hour
    });

    return res.status(200).json({
      success: true,
      message: "Login Successfully.",
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

// logout
export const logout_user = async (req, res) => {
  try {
    res.cookie("token", "", { maxAge: 0 });

    return res.status(200).json({
      success: true,
      message: "Logout Successfully.",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};
