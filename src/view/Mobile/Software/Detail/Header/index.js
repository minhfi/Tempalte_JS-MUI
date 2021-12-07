import React, { useEffect, useMemo, useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router'
import Slider from 'react-slick'
import Background from '@/static/image/software/header-background.png'
import { PROJECT } from '../constans'

const index = () => {
  const { project } = useParams()
  const location = useLocation()
  const history = useHistory()
  const [slideIndex, setSlideIndex] = useState(location.state || 0)
  const content = PROJECT[project][0][0]

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
    customPaging: i => (
      <div className="dot" />
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

  const LAYOUT = useMemo(() => {
    switch (project) {
      case 'vietjet': return (
        <Slider {...settings}>
          <div className="software-detail__header">
            <div className="software-detail__header--left">
              <div className="heading-5 software-detail__header--left__topic">{PROJECT[project][0][0]?.topic}</div>
              <div className="heading-2 software-detail__header--left__project">{PROJECT[project][0][0]?.project}</div>
              <div className="heading-6 software-detail__header--left__technical">{PROJECT[project][0][0]?.technical}</div>
            </div>
            <div className="software-detail__header--right">
              <img src={PROJECT[project][0][0]?.banner} alt="banner"/>
            </div>

            <div className="heading-6 software-detail__header--year">{PROJECT[project][0][0]?.year}</div>

            <div className="software-detail__header--background">
              <img src={Background} alt="background"/>
            </div>
          </div>

          <div className="software-detail__header">
            <div className="software-detail__header--left">
              <div className="heading-5 software-detail__header--left__topic">{PROJECT[project][1][0]?.topic}</div>
              <div className="heading-2 software-detail__header--left__project">{PROJECT[project][1][0]?.project}</div>
              <div className="heading-6 software-detail__header--left__technical">{PROJECT[project][1][0]?.technical}</div>
            </div>
            <div className="software-detail__header--right">
              <img src={PROJECT[project][1][0]?.banner} alt="banner"/>
            </div>

            <div className="heading-6 software-detail__header--year">{PROJECT[project][1][0]?.year}</div>

            <div className="software-detail__header--background">
              <img src={Background} alt="background"/>
            </div>
          </div>
        </Slider>
      )

      default: return (
        <div className="software-detail__header">
          <div className="software-detail__header--left">
            <div className="heading-5 software-detail__header--left__topic">{content?.topic}</div>
            <div className="heading-2 software-detail__header--left__project">{content?.project}</div>
            <div className="heading-6 software-detail__header--left__technical">{content?.technical}</div>
          </div>
          <div className="software-detail__header--right">
            <img src={content?.banner} alt="banner"/>
          </div>

          <div className="heading-6 software-detail__header--year">{content?.year}</div>

          <div className="software-detail__header--background">
            <img src={Background} alt="background"/>
          </div>
        </div>
      )
    }
  }
  , [project, slideIndex])

  return LAYOUT
}

export default index
