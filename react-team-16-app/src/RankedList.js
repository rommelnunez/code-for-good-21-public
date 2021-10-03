import React from 'react'
import RankedItem from './RankedItem'

export default function RankedList({ ranks }) {
    var itemList = ranks.map( item => {
        return <RankedItem key={item.id} item = {item} />
    })
    return <ul>{ itemList }</ul>
}
