import React from 'react'
import { useHistory } from 'react-router'
import Logo from '@/static/svg/logo-icon.svg'
import Dots from '@/static/image/blockchain/blockchain-dots.png'
import Background from '@/static/image/blockchain/blockchain-background-image.png'
import { BLOCKCHAINS } from './constants'
import { Link } from 'react-router-dom'

const index = () => {
  const history = useHistory()

  return (
    <div className="blockchain">
      <div className="blockchain-header">
        <Link to="/">
          <img src={Logo} alt="logo"/>
        </Link>
        <div className="heading-5 blockchain-header--title">OUR BLOCKCHAIN UNIVERSE</div>
      </div>

      <div className="blockchain-content">
        <div className="blockchain-content__wrap">
          {BLOCKCHAINS.map((item) =>
            <div key={item._id} className="blockchain-content__item" onClick={() => history.push(item.path)}>
              <img src={item.image} alt={item.name}/>
              <div className="heading-2 blockchain-content__name">{item.name}</div>
              <div className="paragraph-3 blockchain-content__description">{item.description}</div>
            </div>
          )}
        </div>
      </div>

      <div className="blockchain-background">
        <img src={Background} alt="looper"/>
      </div>

      <div className="blockchain-dots">
        <img src={Dots} alt="blockchain-dots"/>
      </div>
    </div>
  )
}

export default index
