import React from 'react'
import Background from '@/static/image/blockchain/lab/blockchain-lab-bg.png'
import Banner from '@/static/image/blockchain/blockchain-lab-banner.png'
import { LAB_BLOCK } from '../../constants'

const index = () => {
  return (
    <div className="mobile-lab">
      <div className="mobile-lab__header">
        <div className="mobile-lab__header--banner">
          <img src={Banner} alt="banner"/>
        </div>
        <div className="heading-3 mobile-lab__header--title">
          We provide multiple services with different strategic focuses.
        </div>
      </div>

      {LAB_BLOCK.map(block => (
        <div className="mobile-lab__wrap" key={block.title}>
          <div className="mobile-lab__wrap--icon">
            <img src={block.icon} alt={block.title}/>
          </div>
          <div className="heading-4 mobile-lab__wrap--title">{block.title}</div>
          <div className="paragraph-3 mobile-lab__wrap--description">
            {block.description}
          </div>
          {block.list && (
            <div className="mobile-lab__wrap--list">
              <ul>{block.list.map(str => <li key={str} className="paragraph-3">{str}</li>)}</ul>
            </div>
          )}
        </div>
      ))}

      <div className="mobile-lab__background" >
        <img src={Background} alt="background"/>
      </div>
    </div>
  )
}

export default index
