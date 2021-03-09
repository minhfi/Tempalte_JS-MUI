import React from 'react'
import Slider from '_components/slider'
import bannerImages from './constant'

const Banner = () => {
  return (
    <div className="homepage-banner">
      <Slider fade className="homepage-banner__slider" data={bannerImages} />
    </div>
  )
}

export default Banner
