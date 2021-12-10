const { Device, DeviceInfo } = require('../models/index')
const uuid = require('uuid')
const path = require('path')
const ApiError = require('../error/ApiError')

const BrandController = {
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

    async getAll(req, res) {
        const {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 5
        const offset = page * limit - limit
        let devices
        if (!brandId && !typeId) {
            devices = await Device.findAll({limit, offset})
        }
        if (brandId && !typeId) {
            devices = await Device.findAll({where: {brandId}, limit, offset})
        }
        if (!brandId && typeId) {
            devices = await Device.findAll({where: {typeId}, limit, offset})
        }
        if (brandId && typeId) {
            devices = await Device.findAll({where: {typeId, brandId}, limit, offset})
        }
        return res.json(devices)
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

module.exports = BrandController