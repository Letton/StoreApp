const { Type } = require('../models/index')
const ApiError = require('../error/ApiError')
const Commerce = require('@chec/commerce.js')
const commerce = new Commerce(process.env.COMMERCE_PUBLIC_KEY);

const TypeController = {
    async create(req, res) {
        try {
            const { name } = req.body
            const type = await Type.create({name})
            return res.json(type)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    },

    async getAll(req, res) {
        const types = await commerce.categories.list()
        return res.json(types)
    }
}

module.exports = TypeController