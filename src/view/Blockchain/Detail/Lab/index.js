import React from 'react'
import background from '@/static/image/blockchain/lab/blockchain-lab-bg.png'
import backgroundHero from '@/static/image/blockchain/lab/blockchain-lab-main.png'
import gameIcon from '@/static/image/blockchain/lab/blockchain-gaming.png'
import solutionIcon from '@/static/image/blockchain/lab/blockchain-enterise-solution.png'
import researchIcon from '@/static/image/blockchain/lab/blockchain-research.png'
import serviceIcon from '@/static/image/blockchain/lab/blockchain-service.png'
import verifiableIcon from '@/static/image/blockchain/lab/blockchain-veriable-rng.png'

const index = () => {
  const gameFeatures = [
    'Team of blockchain experts',
    'Team of expert game producers (plot, game balance, financial balance in the game)',
    'Team of game developers (Unity)',
    'Art Studio'
  ]

  const blockchainSolutionFeatures = [
    'Smart contract audit',
    'Smart contract review and optimization',
    'Protocol and security audit',
    'Art Studio'
  ]

  return (
    <>
      <div className="blockchain-lab">
        <div className="blockchain-lab-main">
          <div className="blockchain-lab-background">
            <img className="" src={background} alt="background-software"/>
          </div>
          <div className="blockchain-lab-hero">
            <div className="blockchain-lab-hero-image">
              <img src={backgroundHero} alt="image-hero" />
            </div>
            <h1 className="blockchain-lab-hero-heading heading-1">We provide multiple services with different strategic focuses.</h1>
          </div>
          <div className="blockchain-lab-feature col-first">
            <div className="blockchain-lab-feature-item">
              <div className="blockchain-lab-feature-icon">
                <img src={gameIcon} alt="icon-feature"/>
              </div>
              <h3 className="heading-3">Game studio</h3>
              <div className="blockchain-lab-feature-desc">
                <p className="paragraph-3">Catching up with the hot trend of making gamefi on the market. We have the full team to help you create a new game or turn an existing game into a full-featured gamefi from Tokenize to NFT and NFT marketplace. Our team includes:</p>
                <ul>
                  {gameFeatures.map(str => <li key={str}>{str}</li>)}
                </ul>
              </div>
            </div>
            <div className="blockchain-lab-feature-item">
              <div className="blockchain-lab-feature-icon">
                <img src={solutionIcon} alt="icon-feature"/>
              </div>
              <h3 className="heading-3">Enterprise solution</h3>
              <div className="blockchain-lab-feature-desc">
                <p className="paragraph-3"> We consult and implement highly complex products using blockchain technology such as Wallet, Tokens implementation, Dex.</p>
              </div>
            </div>
          </div>
          <div className="blockchain-lab-feature col-second">
            <div className="blockchain-lab-feature-item">
              <div className="blockchain-lab-feature-icon">
                <img src={researchIcon} alt="icon-feature"/>
              </div>
              <h3 className="heading-3">Blockchain solution audit</h3>
              <div className="blockchain-lab-feature-desc">
                <p className="paragraph-3">Security is an extremely important issue in blockchain because it is directly related to users' money. Therefore, every project on the blockchain needs to be thoroughly audited. We provide a full package of auditing services including:</p>
                <ul>
                  {blockchainSolutionFeatures.map(str => <li key={str}>{str}</li>)}
                </ul>
              </div>
            </div>
            <div className="blockchain-lab-feature-item">
              <div className="blockchain-lab-feature-icon">
                <img src={serviceIcon} alt="icon-feature"/>
              </div>
              <h3 className="heading-3">Blockchain node and Staking pool as a service</h3>
              <div className="blockchain-lab-feature-desc">
                <p className="paragraph-3">We have had in-depth experience in developing and managing staking pool nodes in various project protocols.
                  We also offer Node as a Service development for institutions who want to create their own project staking pools. Through our expert development team, institutions can focus on their business strategy and growth, while leaving the technical development and maintenance of the staking pool nodes to us.
                </p>
              </div>
            </div>
          </div>
          <div className="blockchain-lab-feature col-third">
            <div className="blockchain-lab-feature-item">
              <div className="blockchain-lab-feature-icon">
                <img src={verifiableIcon} alt="icon-feature"/>
              </div>
              <h3 className="heading-3">Verifiable RNG</h3>
              <div className="blockchain-lab-feature-desc">
                <p className="paragraph-3">The random number generator system is one of the core components in many applications, especially those related to cryptography. It is essential to simulate true randomness and to verify a value whether it is exactly generated from a fair random system. It helps all systems operate fairly, eliminating fraud. We are proud to be the pioneers in using the power of blockchain technology to provide verifiable RNG service.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default index
