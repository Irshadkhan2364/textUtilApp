import React from 'react'
import Color from './Color';

const Header = (props) => {
  const color = ['#2d3436','#4834d4','#be2edd','#f9ca24','#6ab04c']
  return (
    <>
      <div className='header'>
        <h3>hello it is my first app on react js</h3>
        <div className="colorVariant" >
        {color.map((color,ind)=> <Color color={color} />)}
        {/* <div className='green circle'></div>
        <div className='blue circle'></div>
        <div className='matblack circle'></div>
        <div className='yellow circle'></div> */}
        </div>
      </div>
    </>
  )
}

export default Header
