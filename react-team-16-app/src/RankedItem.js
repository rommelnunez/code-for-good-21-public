import React from 'react'
import './myStyles.css'

export default function RankedItem({ item }) {
    return (
        <div className = "secondary">
            <label>
                {item.id} {item.name}
            </label>
        </div>
    )
}
