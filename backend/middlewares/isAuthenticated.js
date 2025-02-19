import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies("token");

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "User Not Authenticated.",
      });
    }

    // if token present then varify

    const payload = await jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (payload) {
      req.email = payload.email;
      next();
    } else {
      return res.status(401).json({
        success: false,
        message: "User Not Authenticated.",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};
