import React from 'react'
import { useHistory } from 'react-router'

const index = props => {
  const history = useHistory()
  const handleRedirect = () => history.push(props.path)

  return (
    <div className="blockchain-content__item" onClick={handleRedirect}>
      <img src={props.image} alt={props.name}/>
      <div className="heading-2 blockchain-content__name">{props.name}</div>
      <div className="paragraph-3 blockchain-content__description">{props.description}</div>
    </div>
  )
}

export default index
