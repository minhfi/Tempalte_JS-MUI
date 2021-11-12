import React from 'react'
import Logo from '@/static/svg/logo-icon.svg'
import Dots from '@/static/image/blockchain/blockchain-dots.png'
import BlockchainItem from './BlockchainItem'
import { Blockchains } from './constants'

const index = () => {
  return (
    <div className="blockchain">
      <div className="blockchain-header">
        <img src={Logo} alt="logo"/>
        <div className="heading-5 blockchain-header--title">Blockchain gì gì đó </div>
      </div>

      <div className="blockchain-content">
        {Blockchains.map((item, index) => <BlockchainItem key={index} {...item}/>)}
      </div>
      {/*
      <div className="blockchain-background-looper">
        <img src={Dots} alt="looper"/>
      </div> */}

      <div className="blockchain-dots">
        <img src={Dots} alt="blockchain-dots"/>
      </div>
    </div>
  )
}

export default index
