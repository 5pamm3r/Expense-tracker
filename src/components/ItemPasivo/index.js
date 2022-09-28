import React from 'react'
import './ItemPasivo.css'

function ItemPasivo({date, detail, category, price}) {
  
  return (
    <div className='Item__container'>
        <span>{date}</span>
        <span>{detail}</span>
        <span>{category}</span>
        <span>${price}</span>
    </div>
  )
}

export default ItemPasivo