import React from 'react'
import { useParams } from 'react-router'
import Background from '@/static/image/software/vietject/vietject-header-background.png'
import { PROJECT } from '../constans'

const index = () => {
  const { project } = useParams()
  const content = PROJECT[project][0]

  return (
    <div className="software-detail__header">
      <div className="software-detail__header--left">
        <div className="heading-5 software-detail__header--left__topic">{content?.topic}</div>
        <div className="heading-2 software-detail__header--left__project">{content?.project}</div>
        <div className="heading-6 software-detail__header--left__design">{content?.design}</div>
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

export default index
