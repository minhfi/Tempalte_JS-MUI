import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import Particles from 'react-tsparticles'
import Slider from 'react-slick'
import Logo from '@/static/svg/logo-icon.svg'
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
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
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
      <div className="mobile-blockchain__header">
        <Link to="/">
          <img src={Logo} alt="logo"/>
        </Link>
        <div className="heading-5 mobile-blockchain__header--title">OUR BLOCKCHAIN UNIVERSE</div>
      </div>

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
