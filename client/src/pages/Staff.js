import React, { useState, useEffect } from 'react'
import { apiOrderRead, apiOrderUpdate, apiOrderDelete } from '../axios'

export default function Staff() {
    const [orders, setOrders] = useState([])

    const fetchData = async () => {
        const res = await apiOrderRead()
        setOrders(res.orders)
    }

    useEffect(() => {
        setTimeout(() => {
            fetchData()
        }, 3000)
    }, [orders])

    const handleConfirm = async data => {
        if (window.confirm("Confirm")) {
            await apiOrderUpdate(data)
            fetchData()
        }
    }

    const handleDelivery = async data => {
        if (window.confirm("Delivery to customers")) {
            await apiOrderUpdate(data)
            fetchData()
        }
    }

    const handleCancel = async id => {
        if (window.confirm("Cancel Order")) {
            await apiOrderDelete(id)
            fetchData()
        }
    }

    return (
        <div className='read'>
            <table>
                <thead>
                    <tr>
                        <th>Bàn</th>
                        <th>Món ăn</th>
                        <th>Giá</th>
                        <th>Ghi chú</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.length > 0 ? orders.map((item) =>
                        <tr key={item._id}>
                            <td>
                                <h2>{item.number}</h2>
                            </td>
                            <td>
                                <ol>
                                    {item.products.map((product, index) =>
                                        <li key={index}>
                                            <span>{product.name}</span>
                                            <span>({product.price} x {item.quantity} = {item.total})</span>
                                        </li>
                                    )}
                                </ol>
                            </td>
                            <td>{item.total}</td>
                            <td>{item.note}</td>
                            <td>
                                {item.confirm
                                    ? item.status
                                        ? item.delivery
                                            ? <h3>Đã xong</h3>
                                            : <button className='confirm' onClick={() => handleDelivery({ ...item, delivery: true })}>Giao món</button>
                                        : <button className='waiting' disabled>Đợi chế biến</button>
                                    : <>
                                        <button className='confirm' onClick={() => handleConfirm({ ...item, confirm: true })}>Xác nhận</button>
                                        <button className='cancel' onClick={() => handleCancel(item._id)}>Huỷ bỏ</button>
                                    </>}
                            </td>
                        </tr>
                    ) :
                        <tr>
                            <td colSpan='6'>Không có dữ liệu</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}
