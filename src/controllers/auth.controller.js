const autnService = require("../services/autn.service");
const authService = require("../services/autn.service");

module.exports = {
  login: async (req, res, next) => {
    try {
      const { client_id, client_secret } = req.body;
      if ((client_id, client_secret)) {
        const token = autnService.login(client_id, client_secret);
        // call login service
        /* 
          const token = jwt.sign(
            {
              email: user.email,
              userId: user._id
            },
            process.env.JWT_KEY,
            {
              expiresIn: "1h"
            })
          
          res.status(200).send({token: token})
       */
        res.send(token);
      } else {
        res.status(401).send({ message: "Auth failed" });
      }
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
