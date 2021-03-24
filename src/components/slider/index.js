import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { ArrowLeft, ArrowRight } from '@/components/arrow'
import Button from '@/components/button'

const Slider = ({ data, animation = 'fade', className }) => {
  const [slideIndex, setSlideIndex] = useState(0)
  const isAnimating = useRef(false)
  const interval = useRef()

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

  const intervalSlide = () => {
    interval.current = setInterval(autoShowSlides, 4000)
  }

  const clearIntervalSlide = () => {
    clearInterval(interval.current)
  }

  const handleClick = (func) => {
    if (!isAnimating.current) {
      isAnimating.current = true
      func()
      setTimeout(() => {
        isAnimating.current = false
      }, 1000)
    }
  }

  const goNext = () => {
    clearIntervalSlide()
    handleClick(next)
    intervalSlide()
  }

  const goPrev = () => {
    clearIntervalSlide()
    handleClick(previous)
    intervalSlide()
  }

  useEffect(() => {
    // Set interval
    intervalSlide()

    return () => {
      // Clear interval
      clearIntervalSlide()
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
                animation && slideIndex === i
                  ? `${animation}-in`
                  : `${animation}-out`,
                slideIndex === i ? 'active' : ''
              )}
              style={{
                backgroundImage: `url(${item.image})`
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
      <ArrowLeft color="white" className="prev" onClick={goPrev} />
      <ArrowRight color="white" className="next" onClick={goNext} />
    </div>
  )
}

export default Slider
