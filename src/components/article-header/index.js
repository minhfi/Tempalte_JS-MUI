import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import DetectLink from '@/components/detect-link'

const ArticleHeader = ({
  name,
  type,
  description,
  className,
  banner,
  link
}) => {
  return (
    <div className={clsx('article-header', className)}>
      <header className="article-header__info">
        <div className="article-header__info__title">
          <DetectLink to={link}>
            <h1 className="article-header__info__title__name">{name}</h1>
          </DetectLink>
          <h3 className="article-header__info__title__type">{type}</h3>
        </div>
        <DetectLink to={link}>
          <div className="article-header__info__description">
            <h2>{description}</h2>
          </div>
        </DetectLink>
      </header>
      <DetectLink to={link}>
        <div className="article-header__banner">
          <img src={banner} alt={`${name}-banner`} />
        </div>
      </DetectLink>
    </div>
  )
}

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
