import React from 'react'
import Slider from '_components/slider'
import { PROJECT_BANNERS } from '_constants/projects'

const Banner = () => {
  return (
    <div className="homepage-banner">
      <Slider fade className="homepage-banner__slider" data={PROJECT_BANNERS} />
    </div>
  )
}

export default Banner
