import React from 'react'
import Logo from '@/static/svg/logo-white.svg'
import BackgroundLooper from '@/static/image/home/home-background-looper.png'
import DotsTop from '@/static/image/home/home-dots-top.png'
import DotsBottom from '@/static/image/home/home-dots-bottom.png'
import ButtonGo from '@/components/Buttons/ButtonGo'

const index = () => {
  return (
    <div className="mobile-home">
      <div className="mobile-home__logo">
        <img src={Logo} alt="logo"/>
      </div>

      <div className="mobile-home__content">
        <div className="heading-5 mobile-home__content--header">Embark the future with us...</div>
        <div className="heading-3 mobile-home__content--title">
          {'Technology experts\n & strong blockchain\n believers.'}
        </div>
        <ButtonGo type="mobile"/>
      </div>

      <div className="heading-5 mobile-home__description">
        Our passion is making a difference with great products.
      </div>

      <div className="mobile-home__background--looper">
        <img src={BackgroundLooper} alt="looper"/>
      </div>

      <div className="mobile-home__dots--top">
        <img src={DotsTop} alt="home-dots-top"/>
      </div>

      <div className="mobile-home__dots--bottom">
        <img src={DotsBottom} alt="home-dots-bottom"/>
      </div>

    </div>
  )
}

export default index
