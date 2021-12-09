import React from 'react'
import ButtonGo from '@/components/Buttons/ButtonGo'
import Banner from '@/static/image/blockchain/blockchain-banner-gamefi.png'
import Character from '@/static/image/blockchain/blockchain-character.png'
import Background from '@/static/image/blockchain/blockchain-background-game-fi.png'

const index = () => {
  return (
    <div className="mobile-gamefi">
      <div className="mobile-gamefi__content" >
        <div className="mobile-gamefi__content--banner">
          <img src={Banner} alt="banner"/>
        </div>
        <div className="mobile-gamefi__content--wrap">
          <div className="mobile-gamefi__content--wrap__title">
            <img src={Character} alt="character"/>
          </div>
          <div className="heading-5 mobile-gamefi__content--wrap__description">
            {' Be rich, be free, be your own champion\n and be the mightiest ruler of the 7 kingdoms'}
          </div>
          <ButtonGo title="GO FOR A TOUR"/>
        </div>
      </div>

      <div className="heading-6 mobile-gamefi__author">Powered by Dinovative</div>

      <div className="mobile-gamefi__background">
        <img src={Background} alt="game-fi"/>
      </div>
    </div>
  )
}

export default index
