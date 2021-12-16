const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        const {token} = req.cookies
        if (!token) {
            return res.status(401).json({message: 'Not authorized'})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        if (decoded.role != 'ADMIN') {
            return res.status(403).json({message: 'Forbidden'})
        }
        next()
    }
    catch (err) {
        res.status(500).json({message: "Invalid jwt token"})
    }
}