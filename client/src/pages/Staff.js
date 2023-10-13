import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Staff() {
    const { state } = useLocation()
    console.log(state);
    return (
        <div>
            Staff
        </div>
    )
}
