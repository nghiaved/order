import axios from 'axios'

const axiosClient = axios.create({
    baseURL: 'http://localhost:8080'
})

axiosClient.interceptors.response.use(
    response => response.data,
    error => Promise.reject(error.response.data)
)

// Link gọi api server
export const apiProductCreate = data =>
    axiosClient.post('/api/product/create', data)

export const apiProductRead = () =>
    axiosClient.get('/api/product/read')

export const apiProductUpdate = data =>
    axiosClient.put(`/api/product/update/${data._id}`, data)

export const apiProductDelete = id =>
    axiosClient.delete('/api/product/delete/' + id)

// Link gọi api server
export const apiOrderCreate = data =>
    axiosClient.post('/api/order/create', data)

export const apiOrderRead = () =>
    axiosClient.get('/api/order/read')

export const apiOrderUpdate = data =>
    axiosClient.put(`/api/order/update/${data._id}`, data)

export const apiOrderDelete = id =>
    axiosClient.delete('/api/order/delete/' + id)


//User
export const apiUserRegister = data =>
    axiosClient.post('/api/user/register', data)

export const apiUserLogin = data =>
    axiosClient.post('/api/user/login', data)