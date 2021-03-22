import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { ArrowLeft, ArrowRight } from '@/components/arrow'
import Button from '@/components/button'

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
      {/* Images and information slideshow */}
      {data.map((item, i) => {
        return (
          <Link key={item.title} to={item.link}>
            <div
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
              <div className="slider__item__information">
                <h4 className="slider__item__information__title">
                  {item.title}
                </h4>
                <span className="slider__item__information__description">
                  {item.description}
                </span>
                <Button bordered>Xem thêm</Button>
              </div>
            </div>
          </Link>
        )
      })}

      {/* Arrows Controls */}
      <ArrowLeft color="white" className="prev" onClick={previous} />
      <ArrowRight color="white" className="next" onClick={next} />
    </div>
  )
}

export default Slider
