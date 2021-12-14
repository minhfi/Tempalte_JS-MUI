import React from 'react'
import BackgroundLooper from '@/static/image/home/home-background-looper.png'
import BackgroundText from '@/static/image/home/home-background-text.png'
import DotsTop from '@/static/image/home/home-dots-top.png'
import DotsRight from '@/static/image/home/home-dots-right.png'
import DotsBottom from '@/static/image/home/home-dots-bottom.png'
import ButtonGo from '@/components/Buttons/ButtonGo'

const index = () => {
  return (
    <div className="home">
      <div className="home-content">
        <div className="heading-5 home-content__header">Embark the future with us...</div>
        <div className="heading-2 home-content__title">
          <div>Technology experts and strong blockchain believers.
            Our passion is making a difference with
          </div>
          <div>great products.</div>
        </div>
        <ButtonGo title="GET TO KNOW US"/>
      </div>

      <div className="home-background__looper">
        <img src={BackgroundLooper} alt="looper"/>
      </div>

      <div className="home-background__text">
        <img src={BackgroundText} alt="text"/>
      </div>

      <div className="home-dots__top">
        <img src={DotsTop} alt="home-dots-top"/>
      </div>

      <div className="home-dots__bottom">
        <img src={DotsBottom} alt="home-dots-bottom"/>
      </div>

      <div className="home-dots__right">
        <img src={DotsRight} alt="home-dots-right"/>
      </div>

    </div>
  )
}

export default index
