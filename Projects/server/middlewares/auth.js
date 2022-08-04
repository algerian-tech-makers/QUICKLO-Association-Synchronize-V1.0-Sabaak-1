import jwt from "jsonwebtoken";
const getAuthUser = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decodedToken) => {
      if (err) {
        return res.status(500).json({ success: false, message: err.message });
      }
      req.user_id = decodedToken.id;
      next();
    });
  } else {
    return res.status(400).json({
      success: false,
      message: "You need to be authenticated to perform this action!",
    });
  }
};

export default getAuthUser;
