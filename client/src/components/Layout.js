import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Layout({ children }) {
    return (
        <div>
            <header>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/read'>Admin</NavLink>
                <NavLink to='/staff'>Staff</NavLink>
                <NavLink to='/kitchen'>Kitchen</NavLink>
            </header>
            <main>{children}</main>
        </div>
    )
}
