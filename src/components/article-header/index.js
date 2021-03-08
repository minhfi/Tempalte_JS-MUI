import React from 'react'

const ArticleHeader = ({ name, type, description }) => {
  return (
    <div className="article-header">
      <div className="article-header__title">
        <h2>{name}</h2>
        <div>{type}</div>
      </div>
      <div className="article-header__description">{description}</div>
    </div>
  )
}

export default ArticleHeader
