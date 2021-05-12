import { verify } from "jsonwebtoken";

export const AuthMiddleware = (req, res, next) => {
  try {
    // remove bearer
    const token = req.headers.authorization.split(" ")[1];

    const decoded = verify(token, process.env.JWT_KEY);

    req.userData = decoded;
    next();
  } catch (err) {
    // res.status(401).send(err);
    res.status(401).send({
      message: "Auth failed",
    });
  }
};
