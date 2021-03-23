import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import DetectLink from '@/components/detect-link'

const ArticleHeader = React.forwardRef(({
  name,
  type,
  description,
  className,
  banner,
  link
}, ref) => {
  return (
    <DetectLink to={link}>
      <div className={clsx('article-header', className)} ref={ref}>
        <div className="article-header__info">
          <div className="article-header__info__title">
            <div className="article-header__info__title__name">{name}</div>
            <div className="article-header__info__title__type">{type}</div>
          </div>
          <div className="article-header__info__description">{description}</div>
        </div>
        <div className="article-header__banner">
          <img src={banner} alt={`${name}-banner`} />
        </div>
      </div>
    </DetectLink>
  )
})

ArticleHeader.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string
}

ArticleHeader.defaultProps = {
  name: '',
  type: '',
  description: ''
}

export default ArticleHeader
