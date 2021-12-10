const { Type } = require('../models/index')
const ApiError = require('../error/ApiError')

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
        const types = await Type.findAll()
        return res.json(types)
    }
}

module.exports = TypeController