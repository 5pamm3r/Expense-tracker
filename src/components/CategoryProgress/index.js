import React from 'react'
import './CategoryProgress.css'

function CategoryProgress({ progressName, progressValue}) {
  const style = {
    background: `radial-gradient(#222328 40%, transparent 51%),
      conic-gradient(#8241f7  0deg, #464da3  ${(progressValue / 100) * 360}deg, gainsboro 0deg, #f9f9f9bf 0deg)`
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