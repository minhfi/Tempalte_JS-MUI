import React from 'react'
import logo from '@/static/image/logo.png'

const index = () => {
  return (
    <div className="software">
      <div className="container">
        <div className="software-main">
          <div className="logo">
            <img src={logo} srcSet={`${logo} 2x`} alt="logo Dinovative"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
