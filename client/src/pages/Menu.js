import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiProductRead } from '../axios'

export default function Home() {
    const [products, setProducts] = useState([])
    const [list, setList] = useState([])
    const [order, setOrder] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await apiProductRead()
        setProducts(res.products)
    }

    const handleOrder = async () => {
        navigate('/order', { state: list });
    }

    return (
        <div className='home-wrapper'>
            <button onClick={handleOrder}>Order</button>
            <h1>Danh sách món ăn</h1>
            <div className='home'>
                {products.length > 0 && products.map((item) => {
                    let quantity = 1
                    return <div key={item._id} className='box'>
                        <div className="item">
                            <img src={item.image} alt='' />
                            <div className="content">
                                <b>{item.name}</b>
                                <span>{item.price}đ</span>
                            </div>
                            <div className="content">
                                <span>Số lượng: </span>
                                <input type='number' onChange={e => {
                                    quantity = e.target.value
                                }} defaultValue='1' min='1' max='99' />
                            </div>
                            {
                                !order.includes(item._id) ?
                                    <button onClick={() => {
                                        setList([...list, { ...item, quantity }])
                                        setOrder([...order, item._id])
                                    }}>
                                        Thêm
                                    </button>
                                    : <button className='danger' onClick={() =>
                                        setOrder(order.filter(el => el !== item._id))}>
                                        Xoá
                                    </button>
                            }
                        </div>
                    </div>
                }
                )}
            </div >
        </div >
    )
}
