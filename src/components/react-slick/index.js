import React from 'react'
import Slider from 'react-slick'
import ArrowNext from '_static/svg/arrow-next.svg'
import ArrowBack from '_static/svg/arrow-back.svg'
function CustomArrowNext (props) {
  const { className, style, onClick } = props
  return (
    <img
      src={ArrowNext}
      className={className}
      style={{ ...style, height: '100%', display: 'flex', alignItems: 'center', width: 28 }}
      onClick={onClick}
    />
  )
}

function CustomArrowBack (props) {
  const { className, style, onClick } = props
  return (
    <img
      src={ArrowBack}
      className={className}
      style={{ ...style, height: '100%', display: 'flex', alignItems: 'center', width: 28 }}
      onClick={onClick}
    />
  )
}
const ReactSlick = ({ children, settings = {}, ...others }) => {
  const slickSettings = Object.assign({}, {
    infinite: false,
    slidesToShow: 3,
    nextArrow: <CustomArrowNext className="next-btn" />,
    prevArrow: <CustomArrowBack />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }, settings)
  return (
    <Slider {...slickSettings}>{children}</Slider>
  )
}

export default ReactSlick
