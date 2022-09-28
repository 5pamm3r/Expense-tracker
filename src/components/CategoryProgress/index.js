import React from 'react'
import './CategoryProgress.css'

function CategoryProgress({ progressName, progressValue}) {
  const style = {
    background: `radial-gradient(white 50%, transparent 51%),
      conic-gradient(green 0deg ${(progressValue / 100) * 360}deg, gainsboro 0deg 0deg)`
  }
  return (
    <div className='Progress__circle' style={style}>
      <div className='Progress__title'>
        <span className='Progress__name'>{progressName}</span>
        <span className='Progress__value'>{progressValue.toFixed(2)}%</span>
      </div>
    </div>
  )
}

export default CategoryProgress