const jwt = require("jsonwebtoken")

module.exports = (id, login) => {
    const payload = {
        id, 
        login
    }
    return jwt.sign(payload, process.env.SECRET, {expiresIn: "2h"})
}