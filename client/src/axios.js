import axios from 'axios'

const axiosClient = axios.create({
    baseURL: 'http://localhost:7000'
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
