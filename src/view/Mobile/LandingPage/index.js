import React, { useLayoutEffect, useRef, useState, useMemo } from 'react'
import { useHistory, useLocation } from 'react-router'
import ButtonMouseScroll from '@/components/Buttons/ButtonMouseScroll'
import BarIcon from '@/static/svg/bar.svg'
import { LandingRoutes } from './contants'
import Home from '../Home'
import Blockchain from '../Blockchain'
import Software from '../Software'
import About from '../About'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

const index = () => {
  const history = useHistory()
  const location = useLocation()
  const [active, setActive] = useState(-1)
  const timeout = useRef(null)
  const aboutRef = useRef(0)

  const handleActive = () => {
    const index = LandingRoutes.findIndex(({ path }) => path === history.location.pathname)

    if (index === -1) return setActive(0)
    return setActive(index)
  }

  const handleScroll = event => {
    if (event.deltaY > 0) {
      // down
      if (timeout.current) {
        clearTimeout(timeout.current)
      }

      timeout.current = setTimeout(() => {
        if (active < 3) {
          const location = LandingRoutes.find((path, index) => index === active + 1)
          return history.push(location.path)
        }
      }, 100)
    } else {
      // up
      if (aboutRef.current !== 0) return

      if (timeout.current) {
        clearTimeout(timeout.current)
      }

      timeout.current = setTimeout(() => {
        if (active > 0) {
          const location = LandingRoutes.find((path, index) => index === active - 1)
          return history.push(location.path)
        }
      }, 100)
    }
  }

  useLayoutEffect(() => {
    handleActive()
  }, [location.pathname])

  const LAYOUT = useMemo(() => {
    switch (active) {
      case 0: return <Home/>
      case 1: return <Blockchain/>
      case 2: return <Software/>
      case 3: return <About aboutRef={aboutRef}/>
      default: return <div/>
    }
  }, [active])

  return (
    <div className="mobile-landing" onWheel={handleScroll}>
      <div className="landing-wrap">
        <SwitchTransition>
          <CSSTransition
            key={active}
            classNames="main-fade"
            timeout={{ enter: 750, exit: 200 }}
          >
            {LAYOUT}
          </CSSTransition>
        </SwitchTransition>
      </div>

      <ButtonMouseScroll type="mobile"/>

      <div className="mobile-landing__bar">
        <img src={BarIcon} alt="bar"/>
      </div>
    </div>
  )
}

export default index
