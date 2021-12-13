import React, { useLayoutEffect, useRef, useState, useMemo } from 'react'
import { useHistory, useLocation } from 'react-router'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import ButtonMouseScroll from '@/components/Buttons/ButtonMouseScroll'
import { LandingRoutes } from './contants'
import Home from '../Home'
import Blockchain from '../Blockchain'
import Software from '../Software'
import About from '../About'
import Menu from './Menu'

const index = () => {
  const history = useHistory()
  const location = useLocation()
  const [active, setActive] = useState(-1)
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const timeout = useRef(null)
  const contentRef = useRef(0)
  let touchstartY = 0

  const handleToggleMenu = () => {
    const navMenu = document.getElementById('nav-menu')
    const navContent = document.getElementById('nav-content')
    setIsOpenMenu(isOpenMenu => !isOpenMenu)

    if (isOpenMenu) {
      navContent.classList.remove('nav-active')
      return navMenu.classList.remove('menu-toggle')
    }

    navContent.classList.add('nav-active')
    return navMenu.classList.add('menu-toggle')
  }

  const handleActive = () => {
    const index = LandingRoutes.findIndex(({ path }) => path === history.location.pathname)

    if (index === -1) return setActive(0)
    return setActive(index)
  }

  const handleWheel = event => {
    if (isOpenMenu) return

    if (event.deltaY > 0) {
      // down
      if ([2, 3].includes(active) && !contentRef.current?.scrollHeight && window.innerHeight < 765) return
      if (parseInt(contentRef.current?.scrollHeight - contentRef.current?.scrollTop) > parseInt(contentRef.current?.clientHeight)) return

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
      if (contentRef.current?.scrollTop > 0) return

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

  const handleTouchStart = event => (touchstartY = event.changedTouches[0]?.screenY)

  const handleTouchMove = (event) => {
    if (isOpenMenu) return

    if (event.changedTouches[0]?.screenY > (touchstartY + 100)) {
      // up
      if (contentRef.current?.scrollTop > 0) return

      if (timeout.current) {
        clearTimeout(timeout.current)
      }

      timeout.current = setTimeout(() => {
        if (active > 0) {
          const location = LandingRoutes.find((path, index) => index === active - 1)
          return history.push(location.path)
        }
      }, 300)
    }

    if (event.changedTouches[0]?.screenY <= (touchstartY - 100)) {
      // down
      if ([2, 3].includes(active) && !contentRef.current?.scrollHeight && window.innerHeight < 765) return
      if (parseInt(contentRef.current?.scrollHeight - contentRef.current?.scrollTop) > parseInt(contentRef.current?.clientHeight)) return

      if (timeout.current) {
        clearTimeout(timeout.current)
      }

      timeout.current = setTimeout(() => {
        if (active < 3) {
          const location = LandingRoutes.find((path, index) => index === active + 1)
          return history.push(location.path)
        }
      }, 300)
    }
  }

  const handleScroll = e => {
    contentRef.current = e.target
  }

  useLayoutEffect(() => {
    handleActive()
  }, [location.pathname])

  const LAYOUT = useMemo(() => {
    switch (active) {
      case 0: return <Home/>
      case 1: return <Blockchain/>
      case 2: return <Software onScroll={handleScroll}/>
      case 3: return <About onScroll={handleScroll}/>
      default: return <div/>
    }
  }, [active])

  return (
    <div
      className="mobile-landing"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div id="nav-menu" className="mobile-landing__bar--wrap" onClick={handleToggleMenu}>
        <div className="bar-menu mobile-landing__bar--wrap__bar1" />
        <div className="bar-menu mobile-landing__bar--wrap__bar2" />
        <div className="bar-menu mobile-landing__bar--wrap__bar3" />
      </div>

      <div className="mobile-landing__wrap">
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

      {[0, 1].includes(active) && <ButtonMouseScroll type="mobile"/>}

      <Menu isOpenMenu={isOpenMenu} handleToggleMenu={handleToggleMenu}/>
    </div>
  )
}

export default index
