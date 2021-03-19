import React, { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { WorkRoutes } from '@/module/work/route'
import useWindowResize from '@/hooks/useWindowResize'
import useDidMountEffect from '@/hooks/useDidMountEffect'

const WorkNavigation = () => {
  const isNavLinkClickable = useRef(true)
  const timeoutRef = useRef(null)
  const tabIndicatorRef = useRef(null)
  const tabsRef = useRef(null)
  const [active, setActive] = useState(null)

  const [tabsState, setTabsState] = useState({
    tabIndicator: {
      width: '',
      position: ''
    }
  })

  const calcTabIndicatorPosition = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      const activeTabElm = tabsRef.current?.children[active]
      if (!activeTabElm) return

      const childPos = activeTabElm.getBoundingClientRect()
      const parentPos = tabsRef.current.getBoundingClientRect()

      const relativeLeft = childPos.left - parentPos.left
      const width = (tabIndicatorRef.current.style.width = childPos.width + 'px')
      const position = (tabIndicatorRef.current.style.left = relativeLeft + 'px')

      setTabsState({
        ...tabsState,
        tabIndicator: {
          width,
          position
        }
      })
    }, 50)
  }

  const handleClickNavLink = e => {
    !isNavLinkClickable.current && e.preventDefault()
  }

  useWindowResize(() => {
    calcTabIndicatorPosition()
  })

  useDidMountEffect(() => {
    calcTabIndicatorPosition()
    isNavLinkClickable.current = false

    setTimeout(() => {
      isNavLinkClickable.current = true
    }, 800)
  }, [active])

  return (
    <div className="my-container">
      <div className="work-nav__wrap">
        <div className="work-nav__title">Work</div>
        <div ref={tabsRef} className="work-nav">
          {WorkRoutes.map((route, index) => {
            return (
              <NavLink
                onClick={handleClickNavLink}
                key={route.path}
                activeClassName="work-nav__item--active"
                className="work-nav__item"
                to={route.path}
                exact={route.exact}
                isActive={(match, location) => {
                  if (
                    match ||
                    (['/work', '/work/'].includes(location.pathname) &&
                      route.path === '/work/type-of-client') ||
                    location.pathname.includes(route.path)
                  ) {
                    setTimeout(() => {
                      setActive(index)
                    })
                    return true
                  }
                }}
              >
                {route.label}
              </NavLink>
            )
          })}
          <span ref={tabIndicatorRef} className="tab-indicator" />
        </div>
      </div>
    </div>
  )
}

export default WorkNavigation
