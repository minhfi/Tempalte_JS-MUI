import { useHistory } from 'react-router-dom'
import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

const ArticleHeader = ({
  name,
  type,
  description,
  className,
  banner,
  link
}) => {
  const history = useHistory()

  const handleClick = useCallback(() => {
    if (!link) return
    history.push(link)
  }, [link])

  return (
    <div className={clsx('article-header', className)}>
      <header className="article-header__info">
        <div className="article-header__info__title">
          <h1 onClick={handleClick} className={link ? 'link' : ''}>
            {name}
          </h1>
          <h3 onClick={handleClick} className={link ? 'link' : ''}>
            {type}
          </h3>
        </div>

        <div className="article-header__info__description">
          <h2 onClick={handleClick} className={link ? 'link' : ''}>
            {description}
          </h2>
        </div>
      </header>

      <div
        onClick={handleClick}
        className={clsx('article-header__banner', link ? 'link' : '')}
      >
        <img src={banner} alt={`${name}-banner`} />
      </div>
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
