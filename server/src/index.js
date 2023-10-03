const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

try {
    mongoose.connect('mongodb://localhost:27017/order', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log('Connect successfully!')
} catch (error) {
    console.log('Connect failure!')
}

app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))


app.use(cors())

require('./routes/product.route')(app)

const PORT = 7000
app.listen(PORT, () => console.log('App listening at http://localhost:' + PORT))
