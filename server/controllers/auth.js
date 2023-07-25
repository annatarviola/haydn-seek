require("dotenv").config();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;
const { User } = require("../models/user");

const createToken = (username, id) => {
  return jwt.sign({ username, id }, SECRET, {
    expiresIn: "2 days",
  });
};

module.exports = {
  register: async (req, res) => {
    try {
      const { firstName, lastName, email, username, password } = req.body;

      let foundUser = await User.findOne({ where: { username } });

      if (foundUser) {
        res.status(400).send("User already exists");
      } else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = await User.create({
          firstName,
          lastName,
          email,
          username,
          hashedPass: hash,
        });

        const token = createToken(
          newUser.dataValues.username,
          newUser.dataValues.id
        );

        console.log("token", token);

        const exp = Date.now() + 1000 * 60 * 60 * 48;

        res.status(200).send({
          username: newUser.dataValues.username,
          userId: newUser.dataValues.id,
          token,
          exp
        })
      }
    } catch (err) {
      console.log("error in register")
      console.log(err)
      res.sendStatus(400)
    }
  },

  login: (req, res) => {
    console.log("login");
  },
};
