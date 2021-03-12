import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import Button from '_components/button'

const Slider = ({ data, fade, slide, className }) => {
  const [slideIndex, setSlideIndex] = useState(0)

  // Next controls
  const next = () => {
    setSlideIndex((prev) => (prev + 1 > data?.length - 1 ? 0 : prev + 1))
  }

  // Previous controls
  const previous = () => {
    setSlideIndex((prev) => (prev - 1 < 0 ? data.length - 1 : prev - 1))
  }

  // Auto show next slide
  const autoShowSlides = () => {
    next()
  }

  useEffect(() => {
    // Set interval
    const interval = setInterval(autoShowSlides, 4000)
    return () => {
      // Clear interval
      clearInterval(interval)
    }
  }, [])

  return (
    <div className={clsx('slider', className)}>
      {/* Images and informations slideshow */}
      {data.map((item, i) => {
        return (
          <div
            key={item.title}
            className={clsx(
              'slider__item',
              fade ? 'fade-animation' : '',
              slide ? 'slide-in-animation' : '',
              slideIndex === i ? 'active' : ''
            )}
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundPosition: 'center center',
              backgroundAttachment: 'fixed',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              height: '100%'
            }}
          >
            <div className="slider__item__informations">
              <h4 className="slider__item__informations__title">
                {item.title}
              </h4>
              <span className="slider__item__informations__description">
                {item.description}
              </span>
              <Link to={item.link}>
                <Button bordered>Xem thêm</Button>
              </Link>
            </div>
          </div>
        )
      })}

      {/* Arrows Controls */}
      <span className="prev" onClick={previous}>
        &#10094;
      </span>
      <span className="next" onClick={next}>
        &#10095;
      </span>
    </div>
  )
}

export default Slider
