import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

const Card = ({ item, className }) => {
  return (
    <div className={clsx('thumbnail', className)}>
      <Link to={item.link}>
        <img src={item.image} alt={item.alt} />
        <div className="thumbnail__description">
          <span>{item.name}</span>
        </div>
      </Link>
    </div>
  )
}

export default Card
