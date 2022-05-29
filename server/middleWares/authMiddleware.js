const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");
  if (!accessToken) return res.json({ error: "User Not Logged In" });
  try {
    const SECRET_KEY = process.env.TOKEN_KEY;
    const validToken = verify(accessToken, SECRET_KEY);
    req.user = validToken;
    if (validToken) {
      return next();
    }
  } catch (err) {
    return res.json({ error: err });
  }
};
module.exports = { validateToken };
