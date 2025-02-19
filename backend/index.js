import express from "express";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3200;
import connectToDB from "./mongoose.config.js";
import {
  login_user,
  logout_user,
  signup_user,
} from "./controllers/user.controller.js";
// import bodyparser from "body-parser";
import cookieParser from "cookie-parser";
import bodyparser from "body-parser";
import { isAuthenticated } from "./middlewares/isAuthenticated.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(bodyparser());
app.use(cookieParser());

app.post("/api/user/signup", signup_user);
app.post("/api/user/login", login_user);
app.get("/api/user/logout", logout_user);

app.listen(PORT, () => {
  console.log("Server is Running on Port : ", PORT);
  connectToDB();
});
