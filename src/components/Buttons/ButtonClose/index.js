import React from 'react'
import CloseRed from '@/static/svg/close-red.svg'
import { useHistory } from 'react-router'

const index = props => {
  const history = useHistory()

  const handleRedirect = () => history.push(props.path)

  return (
    <div className="btn-close" onClick={handleRedirect}>
      <img src={CloseRed} alt="close"/>
      <div className="heading-3 btn-close__text">close</div>
    </div>
  )
}

export default index
