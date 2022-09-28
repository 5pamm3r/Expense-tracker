import React from 'react'
import './ItemActivo.css'

function ItemActivo({date, detail, category, price}) {
  
  return (
    <div className='Item__container'>
        <span>{date}</span>
        <span>{detail}</span>
        <span>{category}</span>
        <span>${price}</span>
    </div>
  )
}

export default ItemActivo