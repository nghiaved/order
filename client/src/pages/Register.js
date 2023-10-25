import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { apiUserRegister } from '../axios'

export default function Register() {
    const { register, handleSubmit } = useForm()
    const [message, setMessage] = useState()


    const onSubmit = async data => {
        try {
            const res = await apiUserRegister(data)
            if (res && res.status === true) {
                setMessage(res.message)
            }
        } catch (e) {
            setMessage(e.message)
        }
    }

    return (
        <div className="form-wrapper">
            <div className="form-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="title">
                        Đăng ký
                    </div>
                    <input required placeholder="Username" autoComplete="off" {...register('username', { required: true })} />
                    <input type='password' required placeholder="Password" autoComplete="off" {...register('password', { required: true })} />
                    <button>
                        Đăng ký
                    </button>
                    <span className='success'>
                        {message}
                    </span>
                    <p>
                        <Link to='/'>
                            <i className="fa-solid fa-house"></i>
                            Trang chủ
                        </Link>
                        Đã có tài khoản?
                        <Link to='/login'>Đăng nhập</Link>
                    </p>
                </form>
            </div>
        </div >
    )
}
