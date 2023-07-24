require("dotenv").config();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;
const { User } = require("../models/user");

const createToken = (username, id) => {
  return jwt.sign({ username, id }, SECRET, {
    expiresIn: "2hr",
  });
};

module.exports = {
  register: async (req, res) => {
    try {
      const { username, password, firstName, lastName, email } = req.body;

      let foundUser = await User.findOne({ where: { username: username } });

      if (foundUser) {
        res.status(400).send("User already exists")
      } else {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const newUser = await User.create({
            username,
            hashedPass: hash,
            firstName,
            lastName,
            email
        })
      }
    } catch {}
  },

  login: (req, res) => {
    console.log(login)
  }
};
