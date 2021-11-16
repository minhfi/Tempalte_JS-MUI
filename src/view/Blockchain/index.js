import React from 'react'
import Logo from '@/static/svg/logo-icon.svg'
import Dots from '@/static/image/blockchain/blockchain-dots.png'
import Background from '@/static/image/blockchain/blockchain-background-image.png'
import BlockchainItem from './BlockchainItem'
import { Blockchains } from './constants'

const index = () => {
  return (
    <div className="blockchain">
      <div className="blockchain-header">
        <img src={Logo} alt="logo"/>
        <div className="heading-5 blockchain-header--title">OUR BLOCKCHAIN UNIVERSE</div>
      </div>

      <div className="blockchain-content">
        <div className="blockchain-content__wrap">
          {Blockchains.map((item) => <BlockchainItem key={item._id} {...item}/>)}
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
