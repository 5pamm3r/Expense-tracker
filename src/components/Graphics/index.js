import React from 'react'
import './Graphics.css'

function Graphics({ categories, render, showGraphics }) {
  return (
    <div className='Graphics__container'>
      <ul className={`ItemsGraphics__container ${showGraphics}`}>
        {!!showGraphics && categories.map(render)}
      </ul>
    </div>
  )
}

export default Graphics