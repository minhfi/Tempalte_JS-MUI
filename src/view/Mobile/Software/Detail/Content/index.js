import React from 'react'
import { useHistory, useLocation, useParams } from 'react-router'
import ArrowRight from '@/static/svg/arrow-next.svg'
import { PROJECT } from '../constans'

const index = () => {
  const { project } = useParams()
  const location = useLocation()
  const history = useHistory()
  const content = PROJECT[project][location.state || 0][1]

  const handleRedirect = () => history.push(content.nextLink)

  return (
    <div className="mobile-software__detail--content">
      <div className="mobile-software__detail--content__block">
        <div className="heading-4 mobile-software__detail--content__title">Background</div>
        <div className="paragraph-3">{content?.background}</div>
      </div>
      <div className="mobile-software__detail--content__block">
        <div className="heading-4  mobile-software__detail--content__title">Brief</div>
        <div className="paragraph-3">{content?.brief}</div>
      </div>
      <div className="mobile-software__detail--content__block">
        <div className="heading-4 mobile-software__detail--content__title">Solution</div>
        <div className="paragraph-3">{content?.solution}</div>
      </div>
      <div className="mobile-software__detail--content__images">
        {content.images?.map((image, index) => <img key={index} src={image} alt="banner"/>)}
      </div>

      <div className="mobile-software__detail--content__footer">
        <div className="heading-5 mobile-software__detail--content__footer--title">Next software</div>
        <div className="mobile-software__detail--content__footer--link" onClick={handleRedirect}>
          <div className="heading-3">{content?.nextProject}</div>
          <img src={ArrowRight} alt="arrow-go"/>
        </div>
      </div>
    </div>
  )
}

export default index
