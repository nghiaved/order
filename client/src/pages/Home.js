import React, { useState, useEffect } from 'react'
import { apiProductRead } from '../axios'

export default function Home() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await apiProductRead()
        setProducts(res.products)
    }

    return (
        <div className='home'>
            {products.length > 0 && products.map((item) =>
                <div key={item._id} className='box'>
                    <div className="item">
                        <img src={item.image} alt='' />
                        <div className="content">
                            <b>{item.name}</b>
                            <span>{item.price}đ</span>
                        </div>
                        <button>
                            Đặt ngay
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
