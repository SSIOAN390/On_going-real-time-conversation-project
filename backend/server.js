import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoute from "./routes/authRoute.js";
import connectToDB from "./DB/connectToDB.js";
import userRoute from "./routes/userRoute.js";
import messageRoute from "./routes/messageRoute.js";
// import conversationRoute from "./routes/conversationRoute.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
const port = process.env.port || 5000;
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);
app.use("/api/users", userRoute);
// app.use("api/conversations", conversationRoute);

app.listen(port, () => {
  connectToDB();
  console.log(`server running on port ${port}`);
});
