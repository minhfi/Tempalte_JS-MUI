import React, { useLayoutEffect, useRef, useState, useMemo } from 'react'
import { useHistory, useLocation } from 'react-router'
import { Link, NavLink } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import ButtonMouseScroll from '@/components/Buttons/ButtonMouseScroll'
import Logo from '@/static/svg/logo-icon.svg'
import { LandingRoutes, TITLE } from './contants'
import { About, Blockchain, Home, Software } from '..'
import LogoHome from '@/static/svg/logo-white.svg'

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

  const HEADER = useMemo(() => {
    switch (active) {
      case 1:
      case 2:
      case 3:
        return (
          <div className="landing-header">
            <Link to="/">
              <img src={Logo} alt="logo"/>
            </Link>
            <div className="heading-5 landing-header--title">{TITLE[active]}</div>
          </div>
        )
      default: return (
        <div className="landing-header">
          <img src={LogoHome} alt="logo"/>
        </div>
      )
    }
  }, [active])

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
      {HEADER}
      <div className="landing-wrap">
        <SwitchTransition>
          <CSSTransition
            key={active}
            classNames="main-fade-up"
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
