import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { apiProductCreate } from '../axios'

export default function Create() {
    const { register, handleSubmit } = useForm()
    const [message, setMessage] = useState()

    const onSubmit = async (data, e) => {
        try {
            const res = await apiProductCreate(data)
            if (res.product) {
                setMessage('Success')
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
                <h2>Create</h2>
                <input required autoComplete="off" {...register('name', { required: true })} placeholder='Name' />
                <input required autoComplete="off" {...register('price', { required: true })} placeholder='Price' />
                <p>{message && message} </p>
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}
