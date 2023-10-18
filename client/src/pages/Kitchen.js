import React, { useState, useEffect } from 'react'
import { apiOrderRead, apiOrderUpdate } from '../axios'

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

    const handleEdit = async data => {
        if (window.confirm("Done")) {
            await apiOrderUpdate(data)
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
                        <th>Ghi chú</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.length > 0 ? orders.map((item) => {
                        if (item.confirm)
                            return <tr key={item._id}>
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
                                <td>{item.note}</td>
                                <td>
                                    {item.status
                                        ? <h3>Finished</h3>
                                        : <button className='confirm' onClick={() => handleEdit({ ...item, status: true })}>Done</button>
                                    }
                                </td>
                            </tr>
                        else return ""
                    }
                    ) :
                        <tr>
                            <td colSpan='6'>Không có dữ liệu</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div >
    )
}
