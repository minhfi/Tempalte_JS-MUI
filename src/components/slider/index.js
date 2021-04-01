import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@/components/button'
import { ArrowLeft, ArrowRight } from '@/components/arrow'
import findKey from 'lodash/findKey'
import clsx from 'clsx'

const ANIMATION_TYPES = {
  fade: 'fade',
  slide: 'slide'
}
const ANIMATION_DIRECTIONS = {
  left: 'left',
  right: 'right'
}

const Slider = ({ data, animation = ANIMATION_TYPES.fade, className }) => {
  const [slideIndex, setSlideIndex] = useState(0)
  const animationTimeoutRef = useRef(undefined)
  const autoplayTimeoutRef = useRef(null)
  const directionRef = useRef('')

  const animationTimeout = 1000
  const autoplayTimeout = 4000

  const INDEX_MAPPING = {
    previous: slideIndex > 0 ? slideIndex - 1 : data.length - 1,
    current: slideIndex,
    next: slideIndex < data.length - 1 ? slideIndex + 1 : 0
  }

  const changeSlide = (n, direction) => {
    if (animationTimeoutRef.current) {
      return
    }

    directionRef.current = direction

    setSlideIndex(n)

    animationTimeoutRef.current = setTimeout(() => {
      animationTimeoutRef.current = clearTimeout(animationTimeoutRef.current)
    }, animationTimeout)
  }

  const getSlideClassName = (i) => {
    const animationType = ANIMATION_TYPES[animation] || ANIMATION_TYPES.fade

    const slideType = findKey(INDEX_MAPPING, val => val === i)

    let animationClassName =
      autoplayTimeoutRef.current !== null &&
      // animationTimeoutRef initial = null => ko có animation
      (slideIndex === i
        ? `${animationType}-in`
        : directionRef.current === ANIMATION_DIRECTIONS.left
          ? i === INDEX_MAPPING.next
            ? `${animationType}-out`
            : ''
          : i === INDEX_MAPPING.previous
            ? `${animationType}-out`
            : '')

    if (
      animationClassName &&
      animationType === ANIMATION_TYPES.slide &&
      directionRef.current === ANIMATION_DIRECTIONS.left
    ) {
      animationClassName += '--reverse'
    }

    const className = clsx(
      'slider__item',
      slideType && `slider__item--${slideType}`,
      animationClassName
    )

    return className
  }

  useEffect(() => {
    autoplayTimeoutRef.current = setTimeout(() => {
      changeSlide(INDEX_MAPPING.next)
    }, autoplayTimeout)

    return () => {
      clearTimeout(autoplayTimeoutRef.current)
    }
  }, [slideIndex])

  return (
    <div className={clsx('slider', className)}>
      {/* Images and information slideshow */}
      {data.map((item, i) => {
        return (
          <Link key={item.title} to={item.link}>
            <div
              className={getSlideClassName(i)}
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
      <ArrowLeft
        color="white"
        className="prev"
        onClick={() =>
          changeSlide(INDEX_MAPPING.previous, ANIMATION_DIRECTIONS.left)}
      />
      <ArrowRight
        color="white"
        className="next"
        onClick={() => changeSlide(INDEX_MAPPING.next)}
      />
    </div>
  )
}

export default Slider
