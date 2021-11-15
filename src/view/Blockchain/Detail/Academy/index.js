import React from 'react'
import ButtonClose from '@/components/Buttons/ButtonClose'
import DiamondBlueLight from '@/static/image/blockchain/blockchain-diamond-blue-light.png'
import DiamondYellow from '@/static/image/blockchain/blockchain-diamond-yellow.png'
import DiamondRed from '@/static/image/blockchain/blockchain-diamond-red.png'
import Background from '@/static/image/blockchain/blockchain-background-academy.png'
import Banner from '@/static/image/blockchain/blockchain-banner-academy.png'
import Cloud from '@/static/image/blockchain/blockchain-cloud.png'
import ButtonMouseScroll from '@/components/Buttons/ButtonMouseScroll'
import { ACADEMY_TOPIC } from '../../constants'

const index = props => {
  return (
    <div className="academy">
      <ButtonClose path="/blockchain"/>

      <div className="academy-header">
        <div className="heading-1 academy-header__left">
          We educate talents for the future
        </div>
        <div className="academy-header__right">
          <img src={Banner} alt="banner"/>
        </div>
      </div>

      <div className="academy-course">
        <div className="academy-course__item">
          <div className="academy-course__item--left">
            <div className="academy-course__item--left__header">
              <div className="academy-color__bluelight">Course 01</div>
              <div><img src={DiamondBlueLight} alt="diamond-01"/></div>
            </div>
            <div className="heading-4 academy-course__item--title">Blockchain for beginners</div>
          </div>
          <div className="paragraph-3 academy-course__item--right">
            Provide students with basic knowledge and background about blockchain technology, including: storage techniques, consensus rules, blockchain networks, smart contracts… Through the course, students will understand how most current systems on the blockchain work. The course is for those who have no or little knowledge of blockchain and want to start learning about this technology. The course content is provided with very vivid and intuitive examples that are easy to understand for beginners.
          </div>
        </div>
        <div className="academy-course__item">
          <div className="academy-course__item--left">
            <div className="academy-course__item--left__header">
              <div className="academy-color__yellow">Course 02</div>
              <div className="academy-course__item--left__image">
                <img src={DiamondYellow} alt="diamond-02"/>
                <img src={DiamondYellow} alt="diamond-02"/>
              </div>
            </div>
            <div className="heading-4 academy-course__item--title">Become a Blockchain developer</div>
          </div>
          <div className="paragraph-3 academy-course__item--right">
            This is a course intensively for programmers who want to upgrade themselves to become blockchain developers. The course provides essential skills in both blockchain technology and cryptography to help students have complete and comprehensive knowledge to be able to participate in blockchain projects. The course includes all the latest technologies: ERC20, ERC721, ERC1155, smart contracts and DApp.... The program focuses a lot on practice in the lab. The final exam is also a blockchain project with real solutions in practice.
          </div>
        </div>
        <div className="academy-course__item">
          <div className="academy-course__item--left">
            <div className="academy-course__item--left__header">
              <div className="academy-color__red">Course 03</div>
              <div className="academy-course__item--left__image">
                <img src={DiamondRed} alt="diamond-03"/>
                <img src={DiamondRed} alt="diamond-03"/>
                <img src={DiamondRed} alt="diamond-03"/>
              </div>
            </div>
            <div className="heading-4 academy-course__item--title">Decentralize strategies for enterprise solutions</div>
          </div>
          <div className="paragraph-3 academy-course__item--right">
            The course provides strategists or solution directors with an overview of blockchain technology applications to solve real-world problems. The course is a series of problems and corresponding solutions solved on blockchain technology. After the course, each student will be able to draw the appropriate blockchain application solution for his or her business.
          </div>
        </div>
      </div>

      <div className="academy-topic" >
        {ACADEMY_TOPIC.map(item => (
          <div key={item._id} className="academy-topic__item">
            <div className="academy-topic__item--image"><img src={item.image} alt={item.title}/></div>
            <hr/>
            <div className="heading-4 academy-topic__item--title">{item.title}</div>
            <div className="paragraph-3">{item.description}</div>
          </div>
        ))}
      </div>

      <div className="academy-background" >
        <img src={Background} alt="background"/>
      </div>

      <div className="academy-cloud" >
        <img src={Cloud} alt="cloud"/>
      </div>

      <ButtonMouseScroll/>
    </div>
  )
}

export default index
