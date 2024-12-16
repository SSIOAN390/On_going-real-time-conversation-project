import jwt from "jsonwebtoken";

const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 40 * 60 * 1000,
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
  });
};
export default generateToken;
