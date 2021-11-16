import React from 'react'
import Logo from '@/static/svg/logo-white.svg'
import ArrowRight from '@/static/svg/arrow-next.svg'
import BackgroundLooper from '@/static/image/home/home-background-looper.png'
import BackgroundText from '@/static/image/home/home-background-text.png'
import DotsTop from '@/static/image/home/home-dots-top.png'
import DotsRight from '@/static/image/home/home-dots-right.png'
import DotsBottom from '@/static/image/home/home-dots-bottom.png'

const index = () => {
  return (
    <div className="home">
      <img src={Logo} alt="logo"/>
      <div className="home-content">
        <div className="heading-5 home-content__header">Embark the future with us...</div>
        <div className="heading-2 home-content__title">
          <div>Technology experts and strong blockchain believers.
            Our passion is making a difference with
          </div>
          <div>great products.</div>
        </div>
        <div className="home-content__link">
          <div className="heading-6 home-content__link--text">GET TO KNOW US</div>
          <img src={ArrowRight} alt="arrow-go"/>
        </div>
      </div>

      <div className="home-background-looper">
        <img src={BackgroundLooper} alt="looper"/>
      </div>

      <div className="home-background-text">
        <img src={BackgroundText} alt="text"/>
      </div>

      <div className="home-dots-top">
        <img src={DotsTop} alt="home-dots-top"/>
      </div>

      <div className="home-dots-bottom">
        <img src={DotsBottom} alt="home-dots-bottom"/>
      </div>

      <div className="home-dots-right">
        <img src={DotsRight} alt="home-dots-right"/>
      </div>

    </div>
  )
}

export default index
