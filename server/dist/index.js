import "dotenv/config";
import express from "express";
import cookieSession from "cookie-session";
import { config } from "./config/app.config";
import connectDatabase from "./config/database.config";
import { asyncHandler } from "./middlewares/asyncHandler.middleware";
import { HTTPSTATUS } from "./config/http.config";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({
    name: "session",
    keys: ["secret1", "secret2"],
    maxAge: 24 * 60 * 60 * 1000,
}));
app.get("/", asyncHandler(async (req, res, next) => {
    return res.status(HTTPSTATUS.OK).json({ message: "hello!!" });
}));
app.listen(config.PORT, async () => {
    console.log(`Server listening on port ${config.PORT} in ${config.NODE_ENV}`);
    await connectDatabase();
});
