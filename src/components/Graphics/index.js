import React from 'react'

function Graphics({ categories, render }) {
  const [showGraphics, setShowGraphics] = React.useState(false)
  const onClick = () => {
    setShowGraphics(prevState=>!prevState)
  }
  return (
    <div className='Graphics__container'>
      <button onClick={onClick}>Click Me</button>
      <div>
        {!!showGraphics && categories.map(render)}
      </div>
    </div>
  )
}

export default Graphics