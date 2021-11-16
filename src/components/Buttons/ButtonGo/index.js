import React from 'react'
import ArrowRight from '@/static/svg/arrow-next.svg'

const index = props => {
  return (
    <div className="btn-go">
      <div className="heading-6 btn-go__text">{props.title}</div>
      <img src={ArrowRight} alt="arrow-go"/>
    </div>
  )
}

export default index
