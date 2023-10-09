import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Order() {
    const { state } = useLocation()
    const [products, setProducts] = useState(state)
    const [note, setNote] = useState()

    const deleteProduct = async id => {
        if (window.confirm("Delete")) {
            setProducts(products.filter(el => el._id !== id))
        }
    }

    const handleOrder = () => {
        console.log({ products, note });
    }

    return (
        <div className='read'>
            <h1>Danh sách đặt món</h1>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products && products.length > 0 ? products.map((item, index) =>
                            <tr key={item._id}>
                                <td>{++index}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                    <img src={item.image} alt='' />
                                </td>
                                <td>{item.quantity}</td>
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
            <textarea value={note} onChange={e => setNote(e.target.value)} placeholder='Ghi chú'></textarea>
            <button onClick={handleOrder}>Đặt món</button>
            <button>
                <Link to='/'>Huỷ</Link>
            </button>
        </div>
    )
}
