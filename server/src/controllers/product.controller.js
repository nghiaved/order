const productModel = require('../models/product.model')

const productController = {
    create: function(req, res, next) {
        productModel.create(req.body)
            .then(product => res.json({ product }))
            .catch(next)
    },

    read: (req, res, next) => {
        productModel.find()
            .then(products => res.json({ products }))
            .catch(next)
    },

    update: (req, res, next) => {
        productModel.updateOne({ _id: req.params.id }, req.body)
            .then(product => res.json({ product }))
            .catch(next)
    },

    delete: (req, res, next) => {
        productModel.deleteOne({ _id: req.params.id })
            .then(product => res.json({ product }))
            .catch(next)
    }
}

module.exports = productController
