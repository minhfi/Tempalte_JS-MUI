import React from 'react'
import { useHistory, useParams } from 'react-router'
import ArrowRight from '@/static/svg/arrow-next.svg'
import Background from '@/static/image/software/content-background.png'
import { PROJECT } from '../constans'

const index = () => {
  const { project } = useParams()
  const history = useHistory()
  const content = PROJECT[project][1]

  const handleRedirect = () => history.push(content.nextLink)

  return (
    <div className="software-detail__content">
      <div className="software-detail__content--background">
        <div className="heading-4 software-detail__content--left">Background</div>
        <div className="paragraph-3 software-detail__content--right">{content?.background}</div>
      </div>
      <div className="software-detail__content--brief">
        <div className="heading-4  software-detail__content--left">Brief</div>
        <div className="paragraph-3 software-detail__content--right">{content?.brief}</div>
      </div>
      <div className="software-detail__content--solution">
        <div className="heading-4 software-detail__content--left">Solution</div>
        <div className="paragraph-3 software-detail__content--right">{content?.solution}</div>
      </div>
      <div className="software-detail__content--images">
        {content.images.map((image, index) => <img key={index} src={image} alt="banner"/>)}
      </div>

      <div className="software-detail__content--footer">
        <div className="heading-5 software-detail__content--footer__title">Next software</div>
        <div className="software-detail__content--footer__link" onClick={handleRedirect}>
          <div className="heading-2">{content?.nextProject}</div>
          <img src={ArrowRight} alt="arrow-go"/>
        </div>
      </div>

      <div className="software-detail__content--bg__looper">
        <img src={Background} alt="background" />
      </div>
    </div>
  )
}

export default index
