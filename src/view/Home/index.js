import React from 'react'
import Logo from '@/static/svg/logo-white.svg'
import ArrowRight from '@/static/svg/arrow-next.svg'

const index = () => {
  return (
    <div className="home">
      <img src={Logo} alt="logo"/>
      <div className="home-content">
        <div className="heading-5 home-content__header">Embark the future with us...</div>
        <div className="heading-1 home-content__title">Technology experts and strong blockchain believers.</div>
        <div className="home-content__link">
          <div className="heading-6 home-content__link--text">GET TO KNOW US</div>
          <img src={ArrowRight} alt="arrow-go"/>
        </div>
      </div>
    </div>
  )
}

export default index
