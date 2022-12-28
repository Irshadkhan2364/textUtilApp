import React from 'react'

const Color = ({ color }) => {
  return (
    <div>
      <div className='circle' style={{'--bg-color':Color}}></div>
    </div>
  )
}

export default Color
