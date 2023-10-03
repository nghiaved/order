import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { apiProductUpdate } from '../axios'

export default function Create() {
    const { register, handleSubmit } = useForm()
    const [message, setMessage] = useState()

    const location = useLocation()
    const product = location.state

    const navigate = useNavigate()

    const onSubmit = async (data, e) => {
        data._id = product._id
        try {
            const res = await apiProductUpdate(data)
            if (res.product) {
                navigate('/')
            }
            e.target.reset()
        } catch (e) {
            setMessage('Failure')
        }
    }

    return (
        <div className='create'>
            <Link to='/'>Read</Link>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Update</h2>
                <input required autoComplete="off" defaultValue={product.name} {...register('name', { required: true })} placeholder='Name' />
                <input required autoComplete="off" defaultValue={product.price} {...register('price', { required: true })} placeholder='Price' />
                <p>{message && message} </p>
                <button type='submit'>Update</button>
            </form>
        </div>
    )
}
