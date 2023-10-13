import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Layout({ children }) {
    return (
        <div>
            <header>
                <NavLink to='/'>Menu</NavLink>
                <NavLink to='/order'>Order</NavLink>
                <NavLink to='/admin'>Admin</NavLink>
                <NavLink to='/staff'>Staff</NavLink>
                <NavLink to='/kitchen'>Kitchen</NavLink>
            </header>
            <main>{children}</main>
        </div>
    )
}
