require('dotenv').config()
const jwt = require('jsonwebtoken')
const SECRET = process.env

module.exports = {
    isAuthenticated: (req, res, next) => {
        const headerToken = req.get("Authorization") // get authorization value off the token

        if (!headerToken) {
            console.log("ERROR IN auth middleware"); // alert to an error in the middleware
            res.sendStatus(401)
        }

        let token; // set up token to use later

        try {
            token = jwt.verify(headerToken, SECRET) // verify that the token matches the hashed secret
        } catch {
            err.statusCode = 500;
            throw err;
        }

        if (!token) {
            const error = new Error("Not authenticated.")
            error.statusCode = 401;
            throw error
        } // if there's no token, throw an error that points out authentication failed

        next(); // proceed through next events
    }
}