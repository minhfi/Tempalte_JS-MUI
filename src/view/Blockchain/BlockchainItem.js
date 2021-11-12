import React from 'react'

const index = props => {
  return (
    <div className="blockchain-content__item">
      <img src={props.image} alt={props.name}/>
      <div className="heading-2 blockchain-content__name">{props.name}</div>
      <div className="paragraph-3 blockchain-content__description">{props.description}</div>
    </div>
  )
}

export default index
