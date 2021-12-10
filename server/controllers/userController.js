const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const {User, Basket} = require('../models/index')
const jwt = require('jsonwebtoken')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {
            id, 
            email,
            role
        }, 
        process.env.SECRET_KEY,
        {
            expiresIn: '24h'
        }
    )
}


const UserController = {
    async registration(req, res, next) {
        const {email, password} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Invalid email or password'))
        }

        const candidate = await User.findOne({where: {email: email}})
        if (candidate) {
            return next(ApiError.internal('User with this email already exists'))
        }
        const hashPassword = await bcrypt.hash(password, 3)
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})

    },

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email: email}})
        if (!user) {
            return next(ApiError.internal('User not found'))
        }
        const comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.badRequest('Incorrect password'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }
    
}

module.exports = UserController