import React from 'react'
import './Graphics.css'

function Graphics({ categories, render }) {
  const [showGraphics, setShowGraphics] = React.useState(false)
  const onClick = () => {
    setShowGraphics(prevState=>!prevState)
  }
  return (
    <div className='Graphics__container'>
      <button onClick={onClick} className='Graphics-button'>View Graphics</button>
      <div className={`ItemsGraphics__container ${showGraphics}`}>
        {!!showGraphics && categories.map(render)}
      </div>
    </div>
  )
}

export default Graphics