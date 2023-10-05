import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { apiProductRead, apiProductDelete } from '../axios'

export default function Read() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await apiProductRead()
        setProducts(res.products)
    }

    const deleteProduct = async id => {
        if (window.confirm("Delete")) {
            await apiProductDelete(id)
            fetchData()
        }
    }

    return (
        <div className='read'>
            <Link to='/create'>Create</Link>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>
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
    )
}
