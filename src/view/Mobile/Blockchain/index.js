import React, { useState } from 'react'
import { useHistory } from 'react-router'
import Particles from 'react-tsparticles'
import Slider from 'react-slick'
import { BLOCKCHAINS } from './constants'
import { configParticles } from '../Software/config-paritcles'

const index = () => {
  const history = useHistory()
  const [slideCurrentIndex, setSlideCurrentIndex] = useState(0)

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    fade: true,
    pauseOnHover: false,
    dotsClass: 'blockchain-dots__slick',
    beforeChange: (current, next) => setSlideCurrentIndex(next),
    customPaging: i => (
      <div className="slick-slider__dot" />
    )
  }

  const handleRedirect = () => history.push(BLOCKCHAINS[slideCurrentIndex].path)

  return (
    <div className="mobile-blockchain">
      <Particles options={configParticles}/>

      <div className="mobile-blockchain__content">
        <Slider {...settings}>
          {BLOCKCHAINS.map((item, index) =>
            <div key={index} className="mobile-blockchain__content--item" onClick={handleRedirect}>
              <img src={item.image} alt={item.name}/>
              <div className="heading-3 mobile-blockchain__content--name">{item.name}</div>
              <div className="paragraph-3 mobile-blockchain__content--description">{item.description} <span>View detail</span></div>
            </div>
          )}
        </Slider>
      </div>
    </div>
  )
}

export default index
