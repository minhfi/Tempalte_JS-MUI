import React from 'react'
import Mouse from '@/static/svg/mouse.svg'

const index = props => {
  return (
    <div className="mouse-scroll">
      <img src={Mouse} alt="mouse"/>
      <div className="mouse-scroll__text">scroll</div>
    </div>
  )
}

export default index
