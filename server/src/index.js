//Import thư viện
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

//Run app
const app = express()

//Kết nối với database
try {
    mongoose.connect('mongodb://localhost:27017/order', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log('Connect successfully!')
} catch (error) {
    console.log('Connect failure!')
}

//Cho phép nhận dữ liệu từ form
app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))

//Cho phép client gọi tới
app.use(cors())


//Đường dẫn tới các api
require('./routes/product.route')(app)
require('./routes/order.route')(app)

const PORT = 8080
app.listen(PORT, () => console.log('App listening at http://localhost:' + PORT))
