import React, { useEffect, useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router'
import Slider from 'react-slick'
import Background from '@/static/image/software/header-background.png'
import { PROJECT } from '../constans'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const index = () => {
  const { project } = useParams()
  const location = useLocation()
  const history = useHistory()
  const [slideIndex, setSlideIndex] = useState(location.state || 0)

  const settings = {
    initialSlide: slideIndex,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    fade: true,
    pauseOnHover: false,
    dotsClass: 'software-detail__dots--slick',
    customPaging: i => (
      <div className="slick-slider__dot" />
    ),
    beforeChange: (current, next) => setSlideIndex(next)
  }

  useEffect(() => {
    if (project === 'vietjet') {
      history.push({
        pathname: `/software/${project}`,
        search: location.search,
        state: slideIndex
      })
    }
  }, [slideIndex])

  return (
    <Slider {...settings}>
      {PROJECT[project].map((project, index) => (
        <div className="software-detail__header" key={index}>
          <div className="software-detail__header--left">
            <div className="heading-5 software-detail__header--left__topic">{project[0]?.topic}</div>
            <div className="heading-2 software-detail__header--left__project">{project[0]?.project}</div>
            <div className="heading-6 software-detail__header--left__technical">{project[0]?.technical}</div>
          </div>
          <div className="software-detail__header--right">
            <img src={project[0]?.banner} alt="banner"/>
          </div>

          <div className="heading-6 software-detail__header--year">{project[0]?.year}</div>

          <div className="software-detail__header--background">
            <img src={Background} alt="background"/>
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default index
