import React, { useState } from 'react'
import Slider from 'react-slick'
import DiamondBlueLight from '@/static/image/blockchain/blockchain-diamond-blue-light.png'
import DiamondYellow from '@/static/image/blockchain/blockchain-diamond-yellow.png'
import DiamondRed from '@/static/image/blockchain/blockchain-diamond-red.png'
import Background from '@/static/image/blockchain/blockchain-background-academy.png'
import Banner from '@/static/image/blockchain/blockchain-banner-academy.png'
import Cloud from '@/static/image/blockchain/blockchain-cloud.png'
import { ACADEMY_TOPIC } from '../../constants'

const index = () => {
  const [seeMore, setSeeMore] = useState({
    'academy-course-01': true,
    'academy-course-02': true,
    'academy-course-03': true
  })

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true
  }

  const handleSeeMore = (course) => {
    setSeeMore(seeMore => ({ ...seeMore, [course]: !seeMore[course] }))
  }

  return (
    <div className="mobile-academy">
      <div className="mobile-academy__header">
        <div className="heading-3 mobile-academy__header--title">
          We educate talents for the future
        </div>
        <div className="mobile-academy__header--banner">
          <img src={Banner} alt="banner"/>
        </div>

        <div className="mobile-academy__header--cloud" >
          <img src={Cloud} alt="cloud"/>
        </div>
      </div>

      <div className="mobile-academy__course">
        <div id="academy-course-01" className="mobile-academy__course--item">
          <div className="mobile-academy__course--item__top">
            <div className="mobile-academy__course--item__top--course">
              <div className="heading-6 academy-color__bluelight">Course 01</div>
              <div><img src={DiamondBlueLight} alt="diamond-01"/></div>
            </div>
            <div className="heading-5 mobile-academy__course--item__top--title">Blockchain for beginners</div>
          </div>
          <div className="paragraph-3 mobile-academy__course--item__bottom">
            {'Provide students with basic knowledge and background about blockchain technology, including: storage techniques, consensus rules, blockchain networks, smart contracts… Through the course, students will understand how most current systems on the blockchain work. The course is for those who have no or little knowledge of blockchain and want to start learning about this technology. The course content is provided with very vivid and intuitive examples that are easy to understand for beginners.'.substring(0, seeMore['academy-course-01'] ? 210 : 10000)} {seeMore['academy-course-01'] && '...'}
            <span className="academy-color__bluelight" onClick={() => handleSeeMore('academy-course-01')}>{seeMore['academy-course-01'] ? 'See more' : ' See less'}</span>
          </div>
        </div>
        <div id="academy-course-02" className="mobile-academy__course--item">
          <div className="mobile-academy__course--item__top">
            <div className="mobile-academy__course--item__top--course">
              <div className="heading-6 academy-color__yellow">Course 02</div>
              <div className="mobile-academy__course--item__top--course__image">
                <img src={DiamondYellow} alt="diamond-02"/>
                <img src={DiamondYellow} alt="diamond-02"/>
              </div>
            </div>
            <div className="heading-5 mobile-academy__course--item__top--title">Become a Blockchain developer</div>
          </div>
          <div className="paragraph-3 mobile-academy__course--item__bottom">
            {'This is a course intensively for programmers who want to upgrade themselves to become blockchain developers. The course provides essential skills in both blockchain technology and cryptography to help students have complete and comprehensive knowledge to be able to participate in blockchain projects. The course includes all the latest technologies: ERC20, ERC721, ERC1155, smart contracts and DApp.... The program focuses a lot on practice in the lab. The final exam is also a blockchain project with real solutions in practice.'.substring(0, seeMore['academy-course-02'] ? 210 : 10000)} {seeMore['academy-course-02'] && '...'}
            <span className="academy-color__yellow" onClick={() => handleSeeMore('academy-course-02')}>{seeMore['academy-course-02'] ? 'See more' : ' See less'}</span>
          </div>
        </div>
        <div id="academy-course-03" className="mobile-academy__course--item">
          <div className="mobile-academy__course--item__top">
            <div className="mobile-academy__course--item__top--course">
              <div className="heading-6 academy-color__red">Course 03</div>
              <div className="mobile-academy__course--item__top--course__image">
                <img src={DiamondRed} alt="diamond-03"/>
                <img src={DiamondRed} alt="diamond-03"/>
                <img src={DiamondRed} alt="diamond-03"/>
              </div>
            </div>
            <div className="heading-5 mobile-academy__course--item__top--title">Decentralize strategies for enterprise solutions</div>
          </div>
          <div className="paragraph-3 mobile-academy__course--item__bottom">
            {'The course provides strategists or solution directors with an overview of blockchain technology applications to solve real-world problems. The course is a series of problems and corresponding solutions solved on blockchain technology. After the course, each student will be able to draw the appropriate blockchain application solution for his or her business.'.substring(0, seeMore['academy-course-03'] ? 210 : 10000)} {seeMore['academy-course-03'] && '...'}
            <span className="academy-color__red" onClick={() => handleSeeMore('academy-course-03')}>{seeMore['academy-course-03'] ? 'See more' : ' See less'}</span>
          </div>
        </div>
      </div>

      <div className="mobile-academy__topic" >
        <Slider {...settings}>
          {ACADEMY_TOPIC.map(item => (
            <div key={item._id} className="mobile-academy__topic--item">
              <div className="mobile-academy__topic--item__image"><img src={item.image} alt={item.title}/></div>
              <hr/>
              <div className="heading-5 mobile-academy__topic--item__title">{item.title}</div>
              <div className="paragraph-3">{item.description}</div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="mobile-academy__background" >
        <img src={Background} alt="background"/>
      </div>
    </div>
  )
}

export default index
