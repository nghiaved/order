import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import FileBase64 from 'react-file-base64'
import { apiProductUpdate } from '../axios'

export default function Create() {
    const location = useLocation()
    const product = location.state

    const { register, handleSubmit } = useForm()
    const [message, setMessage] = useState()
    const [image, setImage] = useState(product.image)

    const navigate = useNavigate()

    const onSubmit = async (data, e) => {
        if (!image) {
            setMessage('No image')
        } else {
            data.image = image
            data._id = product._id
            try {
                const res = await apiProductUpdate(data)
                if (res.product) {
                    navigate('/read')
                }
                e.target.reset()
            } catch (e) {
                setMessage('Failure')
            }
        }
    }

    return (
        <div className='create'>
            <Link to='/read'>Read</Link>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Update</h2>
                <input required autoComplete="off" defaultValue={product.name} {...register('name', { required: true })} placeholder='Name' />
                <input required autoComplete="off" defaultValue={product.price} {...register('price', { required: true })} placeholder='Price' />
                <label>
                    <FileBase64
                        multiple={false}
                        onDone={({ base64 }) => {
                            setImage(base64)
                        }}
                    />
                    Ảnh
                </label>
                {image && <img src={image} alt='' />}
                <p>{message && message} </p>
                <button type='submit'>Update</button>
            </form>
        </div>
    )
}
