const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        const {token} = req.cookies
        if (!token) {
            return next()
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded
        next()
    }
    catch (err) {
        res.status(500).json({message: "Invalid jwt token"})
    }
}