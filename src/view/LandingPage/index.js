import React, { useLayoutEffect, useRef, useState } from 'react'
import { About, Blockchain, Home, Software } from '..'
import Mouse from '@/static/svg/mouse.svg'
import { useHistory } from 'react-router'
import { NavLink } from 'react-router-dom'
import { LandingRoutes } from './contants'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

const index = () => {
  const history = useHistory()
  const [active, setActive] = useState(0)
  const timeout = useRef(null)

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
      }, 500)
    } else {
      console.log('object')
      // up
      if (timeout.current) {
        clearTimeout(timeout.current)
      }

      timeout.current = setTimeout(() => {
        if (active > 0) {
          const location = LandingRoutes.find((path, index) => index === active - 1)
          return history.push(location.path)
        }
      }, 1000)
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
      case 3: return <About/>
      default: return <Home/>
    }
  }

  return (
    <div className="landing" onWheel={handleScroll} >
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={active}
          addEndListener={(node, done) => {
            node.addEventListener('transitionend', done, false)
          }}
          classNames="fade"
        >
          <div className="landing-transition">
            <div className="landing-wrap">
              {renderLayout()}
            </div>
          </div>
        </CSSTransition>
      </SwitchTransition>
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
      <div className="landing-scroll">
        <img src={Mouse} alt="mouse"/>
        <div className="landing-scroll__text">scroll</div>
      </div>
    </div>
  )
}

export default index
