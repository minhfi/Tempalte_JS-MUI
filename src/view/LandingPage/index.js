import React, { useLayoutEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router'
import { NavLink } from 'react-router-dom'
import ButtonMouseScroll from '@/components/Buttons/ButtonMouseScroll'
import { LandingRoutes } from './contants'
import { About, Blockchain, Home, Software } from '..'

const index = () => {
  const history = useHistory()
  const [active, setActive] = useState(0)
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
  }, [history.location.pathname])

  const renderLayout = () => {
    switch (active) {
      case 0: return <Home/>
      case 1: return <Blockchain/>
      case 2: return <Software/>
      case 3: return <About aboutRef={aboutRef}/>
      default: return <About/>
    }
  }

  return (
    <div className="landing" onWheel={handleScroll}>
      <div className="landing-wrap">
        {renderLayout()}
      </div>
      <div className="landing-nav">
        {LandingRoutes.map((nav, index) => (
          <NavLink
            key={index} to={nav.path} className="display-6 landing-nav__title" activeClassName="landing-nav__active"
            isActive={(match, location) => {
              if (
                (location.pathname === '/' &&
                  nav.path === '/home') ||
                location.pathname.includes(nav.path)
              ) {
                return true
              }
            }}
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
