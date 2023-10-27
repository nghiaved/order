import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { apiOrderCreate } from '../axios'

export default function Order() {
    const { state } = useLocation()
    const navigate = useNavigate()
    const [products, setProducts] = useState(state && state.list)
    const [note, setNote] = useState()
    const total = products && products.length > 0 && products.reduce(function (total, num) {
        return total + num.total
    }, 0)

    const deleteProduct = async id => {
        if (window.confirm("Delete")) {
            setProducts(products.filter(el => el._id !== id))
        }
    }

    const handleOrder = async () => {
        if (state) {
            await apiOrderCreate({ products, total, note, number: state.number || 20 })
            alert('Please wait for staff to confirm your order!')
        } else {
            alert('Order was not successful!')
        }
    }

    const handleBack = () => {
        navigate('/')
    }

    return (
        <div className='read'>
             <header>
                <img src='https://media.baamboozle.com/uploads/images/90575/1600786853_367509' height="150px" alt='logo của trang'></img>
            </header>
            <br></br>
            <br></br>
            <h1>DANH SÁCH ĐẶT MÓN</h1>
            <div className='auto'>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên sản phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Giá</th>
                        <th>Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products && products.length > 0 ? products.map((item, index) =>
                            <tr key={item._id}>
                                <td>{++index}</td>
                                <td>{item.name}</td>
                                <td>
                                    <img src={item.image} alt='' />
                                </td>
                                <td>{item.price} x {item.quantity} = {item.total}</td>
                                <td>
                                    <i onClick={() => deleteProduct(item._id)} className="fa-solid fa-trash btn-delete"></i>
                                </td>
                            </tr>)
                            : <tr>
                                <td colSpan='6'>Không có dữ liệu</td>
                            </tr>
                    }
                </tbody>
            </table>
            </div>
            <textarea value={note} onChange={e => setNote(e.target.value)} placeholder='Ghi chú'></textarea>
            <h2>Tổng cộng: {total}</h2>
            <button onClick={handleOrder}>Đặt món</button>
            <button onClick={handleBack}>Huỷ</button>
        </div>
    )
}
