import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

const ArticleHeader = ({ name, type, description, className, banner }) => {
  return (
    <div className={clsx('article-header', className)}>
      <header className="article-header__info">
        <div className="article-header__info__title">
          <h1>{name}</h1>
          <h3>{type}</h3>
        </div>
        <h2 className="article-header__info__description">{description}</h2>
      </header>

      <div className="article-header__banner">
        <img src={banner} alt={`${name}-banner`} />
      </div>
    </div>
  )
}

ArticleHeader.propTypes = {
  name: PropTypes.string
}

ArticleHeader.defaultProps = {
  name: '',
  type: '',
  description: ''
}

export default ArticleHeader
