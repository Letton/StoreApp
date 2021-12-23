const { Device, DeviceInfo } = require('../models/index')
const uuid = require('uuid')
const path = require('path')
const ApiError = require('../error/ApiError')
const Commerce = require('@chec/commerce.js')
const commerce = new Commerce(process.env.COMMERCE_PUBLIC_KEY);

const ProductController = {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body
            const { img } = req.files
            const fileName = uuid.v4() + path.extname(img.name)
            img.mv(path.resolve(__dirname, '..', 'static', 'images', 'upload', fileName))
            const device = await Device.create({name, price, brandId, typeId, img: fileName})
            if (info) {
                info = JSON.parse(info)
                await DeviceInfo.create({
                    title: info.title,
                    description: info.description,
                    deviceId: device.id 
                })
            }
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    },

    async getAll(req, res, next) {
        
        let {category_slug, limit, page} = req.query
        if (category_slug	) {
            const products = await commerce.products.list({
                category_slug: [category_slug]
            })
            return res.json(products)
        }
        next(ApiError.badRequest("No type id"))
    },

    async getOne(req, res) {
        const {id} = req.params
        const device = await Device.findOne(
            {
                where: {id},
                include: [{model: DeviceInfo, as: 'info'}]
            },
        )
        return res.json(device)
    }
}

module.exports = ProductController