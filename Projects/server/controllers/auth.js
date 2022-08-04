import "dotenv/config";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import RefreshTokens from "../models/Tokens.js";
import { createToken, createRefreshToken } from "../helpers/tokenCreate.js";

export async function signup(req, res) {
  const { email, password } = req.body;
  try {
    const exist = await User.findOne({ email: email });
    if (exist)
      return res
        .status(400)
        .json({ success: false, message: "email already exists" });

    const hashedPw = await bcrypt.hash(password, 10);

    const user = await User.create({ ...req.body, password: hashedPw });

    createToken(user._id, res);
    await createRefreshToken(user._id, res);

    return res.status(201).json({
      success: true,
      data: { username: user.username, id: user._id },
    });
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
}

export async function login(req, res) {
  const { email, password } = req.body;
  try {
    const user = email && (await User.findOne({ email: email }));
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "user not found" });
    const isMatch = password && (await bcrypt.compare(password, user.password));
    if (!isMatch)
      return res.status(400).json({ success: false, message: "wrong pasword" });

    createToken(user._id, res);
    await createRefreshToken(user._id, res);

    return res.status(200).json({
      success: true,
      data: { username: user.username, id: user._id },
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      success: false,
      message: "internal server error, try again later",
    });
  }
}

export async function logout(req, res) {
  try {
    res.cookie("jwt", "", { maxAge: 1 });
    res.cookie("jwt_refresh", "", { maxAge: 1 });
    //removes refresh token from db
    const refreshCookie = req.cookies.jwt_refresh;
    const decoded = jwt.decode(refreshCookie);
    if (!decoded)
      return res
        .status(400)
        .json({ success: true, message: "you are already logged out" });

    await RefreshTokens.updateOne(
      { id: decoded.id },
      {
        $pull: { tokens: refreshCookie },
      }
    );

    return res
      .status(200)
      .json({ success: true, message: "you are logged out" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "internal server error, try again later",
    });
  }
}

export async function tokenRefresh(req, res) {
  const token = req.cookies.jwt_refresh;
  try {
    if (!token)
      return res.status(400).json({ success: false, message: "no token" });

    const verefiedToken = jwt.verify(token, process.env.JWT_REFRESH_KEY);
    const userTokens = await RefreshTokens.findOne({ id: verefiedToken.id });
    if (!userTokens?.tokens.includes(token))
      return res
        .status(403)
        .json({ success: false, message: "invalid refresh token" });

    createToken(verefiedToken.id, res);
    return res
      .status(200)
      .json({ success: true, message: "token has been refreshed" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
    // cleaning the DB from expired tokens
    if (error.message == "jwt expired") {
      const { id } = jwt.decode(token);
      const tokenUser = await RefreshTokens.findOne({ id });
      if (tokenUser)
        RefreshTokens.updateOne(
          { id: tokenUser._id },
          { $pull: { tokens: token } }
        );
    }
  }
}
