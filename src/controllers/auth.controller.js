import { login as _login } from "../services/auth.service";
import { hashSync, compareSync } from "bcrypt";
import { sign } from "jsonwebtoken";

export const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  console.log("login");
  try {
    const user = {
      username: "test",
      // password is test
      password: hashSync("test", 10),
    };

    console.log(user);
    const checkPassword = compareSync(password, user.password);
    console.log(checkPassword);
    if (checkPassword) {
      const token = sign(
        {
          username: user.username,
        },
        process.env.JWT_KEY,
        {
          expiresIn: "1h",
        }
      );

      console.log(token);
      return res
        .status(200)
        .send({ token: token, type: "Bearer", expires_in: 1 });
    } else {
      return res.status(401).send({ message: "Auth failed" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
};
