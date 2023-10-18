const orderModel = require('../models/order.model')

const orderController = {
    create: function (req, res, next) {
        orderModel.create(req.body)
            .then(order => res.json({ order }))
            .catch(next)
    },

    read: (req, res, next) => {
        orderModel.find()
            .then(orders => res.json({ orders }))
            .catch(next)
    },

    update: (req, res, next) => {
        orderModel.updateOne({ _id: req.params.id }, req.body)
            .then(order => res.json({ order }))
            .catch(next)
    },

    delete: (req, res, next) => {
        orderModel.deleteOne({ _id: req.params.id })
            .then(order => res.json({ order }))
            .catch(next)
    }
}

module.exports = orderController
