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
                {products.length > 0 && products.map((item) =>
                    <div key={item._id} className='box'>
                        <div className="item">
                            <img src={item.image} alt='' />
                            <div className="content">
                                <b>{item.name}</b>
                                <span>{item.price}đ</span>
                            </div>
                            <div className="content">
                                <span>Số lượng: </span>
                                <input disabled={order.includes(item._id) ? true : false} type='number' onChange={e => {
                                    item.quantity = e.target.value
                                }} defaultValue='1' min='1' max='99' />
                            </div>
                            <button className={!order.includes(item._id) ? '' : 'danger'} onClick={() => {
                                if (!order.includes(item._id)) {
                                    setOrder([...order, item._id])
                                    setList([...list, { ...item, total: item.price * item.quantity, quantity: item.quantity ?? 1 }])
                                } else {
                                    setOrder(order.filter(el => el !== item._id))
                                    setList(list.filter(el => el._id !== item._id))
                                }
                            }}>
                                {!order.includes(item._id) ? 'Thêm' : 'Xoá'}
                            </button>
                        </div>
                    </div>
                )}
            </div >
        </div >
    )
}
