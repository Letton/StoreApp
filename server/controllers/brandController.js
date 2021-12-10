const { Brand } = require('../models/index')
const ApiError = require('../error/ApiError')

const BrandController = {
    async create(req, res, next) {
        try {
            const { name } = req.body
            const brand = await Brand.create({name})
            return res.json(brand)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    },

    async getAll(req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }
}

module.exports = BrandController