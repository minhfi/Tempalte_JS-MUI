import React, { useEffect, useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router'
import Slider from 'react-slick'
import ButtonMouseScroll from '@/components/Buttons/ButtonMouseScroll'
import { PROJECT } from '../constans'

const index = props => {
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
    speed: 1000,
    fade: true,
    dotsClass: 'mobile-software__detail--dots__slick',
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
    <>
      <Slider {...settings}>
        {PROJECT[project].map((project, index) => (
          <div className="mobile-software__detail--header" key={index}>
            <div className="mobile-software__detail--header__banner">
              <img src={project[0]?.banner} alt="banner"/>
            </div>
            <div className="mobile-software__detail--header__content">
              <div className="heading-5 mobile-software__detail--header__content--topic">{project[0]?.topic}</div>
              <div className="heading-3 mobile-software__detail--header__content--project">{project[0]?.project}</div>
              <div className="heading-6 mobile-software__detail--header__content--technical">{project[0]?.technical}</div>
            </div>

            <div className="heading-6 mobile-software__detail--header__year">{project[0]?.year}</div>
          </div>
        ))}
      </Slider>

      <ButtonMouseScroll type="mobile"/>
    </>
  )
}

export default index
