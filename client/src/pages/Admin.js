import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { apiProductRead, apiProductDelete, apiOrderRead, apiOrderDelete } from '../axios'

export default function Read() {
    const [products, setProducts] = useState([])
    const [orders, setOrders] = useState([])
    const total = orders && orders.length > 0 && orders.reduce(function (total, num) {
        return total + num.total
    }, 0)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const resProduct = await apiProductRead()
        const resOrder = await apiOrderRead()
        setProducts(resProduct.products)
        setOrders(resOrder.orders)
    }

    const deleteProduct = async id => {
        if (window.confirm("Delete")) {
            await apiProductDelete(id)
            fetchData()
        }
    }

    const handleDelete = async id => {
        if (window.confirm("Delete")) {
            await apiOrderDelete(id)
            fetchData()
        }
    }

    return (
        <div className='read'>
             <header className='center'>
                <img src='https://media.baamboozle.com/uploads/images/90575/1600786853_367509' height="150px" alt='logo của trang'></img>
            </header>
            <br></br>
            <br></br>
            <h1>DANH SÁCH ĐƠN HÀNG</h1>
            <div className='auto'>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Bàn</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Ghi chú</th>
                        <th>Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.length > 0 ? orders.map((item, index) =>
                        <tr key={item._id}>
                            <td>{++index}</td>
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
                                <button className='cancel' onClick={() => handleDelete(item._id)}>Delete</button>
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
            <h2>Tổng cộng: {total}</h2>
            <Link to='/create'>Create</Link>
            <div className='auto'>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Hình ảnh</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 ? products.map((item, index) =>
                        <tr key={item._id}>
                            <td>{++index}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>
                                <img src={item.image} alt='' />
                            </td>
                            <td>
                                <Link to='/update' state={item}>
                                    <i className="fa-solid fa-pen btn-edit"></i>
                                </Link>
                            </td>
                            <td>
                                <i onClick={() => deleteProduct(item._id)} className="fa-solid fa-trash btn-delete"></i>
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
        </div>
    )
}
