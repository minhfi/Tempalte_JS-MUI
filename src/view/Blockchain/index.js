import React from 'react'
import { useHistory } from 'react-router'
import Particles from 'react-tsparticles'
import Dots from '@/static/image/blockchain/blockchain-dots.png'
import { BLOCKCHAINS } from './constants'
import { configParticles } from '../Software/config-paritcles'

const index = () => {
  const history = useHistory()

  return (
    <div className="blockchain">
      <Particles
        options={configParticles}
      />
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

      <div className="blockchain-dots">
        <img src={Dots} alt="blockchain-dots"/>
      </div>
    </div>
  )
}

export default index
