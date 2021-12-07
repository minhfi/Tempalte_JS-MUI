import React, { useLayoutEffect, useRef, useState, useMemo } from 'react'
import { useHistory, useLocation } from 'react-router'
import { NavLink } from 'react-router-dom'
import ButtonMouseScroll from '@/components/Buttons/ButtonMouseScroll'
import { LandingRoutes } from './contants'
import { About, Blockchain, Home, Software } from '..'
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

  const handleWheel = event => {
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
    <div className="landing" onWheel={handleWheel}>
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
      <div className="landing-nav">
        {LandingRoutes.map((nav, index) => (
          <NavLink
            key={index}
            to={nav.path} className="display-6 landing-nav__title" activeClassName="landing-nav__active"
            isActive={(match, location) => (location.pathname === '/' && nav.path === '/home') || location.pathname.includes(nav.path)}
          >
            {nav.label}
          </NavLink>
        ))}
      </div>

      <ButtonMouseScroll/>
    </div>
  )
}

export default index
