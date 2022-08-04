import jwt from "jsonwebtoken";
import RefreshTokens from "../models/Tokens.js";

const MAX_AGE = 15 * 60; //max age in seconds = 15 minutes
const MAX_AGE_REFRESH = 60 * 60 * 24 * 60; //max age of refresh in seconds = 60 days

//creates the jwt token and sends the cookie
export const createToken = (id, res) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: MAX_AGE,
  });
  res.cookie("jwt", token, { httpOnly: true });
  return token;
};

//creates jwt refresh token and sends the cookie
export const createRefreshToken = async (id, res) => {
  const token = jwt.sign({ id }, process.env.JWT_REFRESH_KEY, {
    expiresIn: MAX_AGE_REFRESH,
  });

  res.cookie("jwt_refresh", token, {
    httpOnly: true,
  });

  // adding the refresh token to the DB to make sure it's valid and to add the possiblity of removin it by logging out
  const refreshTokens = await RefreshTokens.findOne({ id });
  if (!refreshTokens) await RefreshTokens.create({ id, tokens: [token] });
  else await RefreshTokens.updateOne({ id }, { $push: { tokens: token } });
  return token;
};
