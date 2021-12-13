import React, { useLayoutEffect, useRef, useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import ButtonClose from '@/components/Buttons/ButtonClose'
import { useQuery } from '@/util/url'
import Header from './Header'
import Content from './Content'
import { PROJECT } from './constans'

const index = () => {
  const history = useHistory()
  const location = useLocation()
  const page = useQuery('page')
  const { project } = useParams()
  const [active, setActive] = useState(0)
  const timeout = useRef(null)
  const contentRef = useRef(null)
  const software = PROJECT[project][location?.state || 0]
  let touchstartY = 0

  const handleActive = () => {
    const index = software?.findIndex(item => item.page === page)

    if (index === -1) return setActive(0)
    return setActive(index)
  }

  const handleWheel = event => {
    if (event.deltaY > 0) {
      // down
      if (!contentRef.current?.scrollHeight && window.innerHeight < 765) return
      if (parseInt(contentRef.current?.scrollHeight - contentRef.current?.scrollTop) > parseInt(contentRef.current?.clientHeight)) return

      if (timeout.current) {
        clearTimeout(timeout.current)
      }

      timeout.current = setTimeout(() => {
        if (active === 0) {
          const data = software.find((page, index) => index === active + 1)
          return history.push({
            pathname: data.path.split('?')[0],
            search: data.path.split('?')[1],
            state: location.state
          })
        }
      }, 100)
    } else {
      // up
      if (contentRef.current.scrollTop > 0) return

      if (timeout.current) {
        clearTimeout(timeout.current)
      }

      timeout.current = setTimeout(() => {
        if (active === 1) {
          const data = software.find((path, index) => index === active - 1)

          return history.push({
            pathname: data.path.split('?')[0],
            search: data.path.split('?')[1],
            state: location.state
          })
        }
      }, 100)
    }
  }

  const handleScroll = e => {
    contentRef.current = e.target
  }

  const handleTouchStart = event => (touchstartY = event.changedTouches[0]?.screenY)

  const handleTouchMove = (event) => {
    if (event.changedTouches[0]?.screenY >= touchstartY) {
      // up
      if (contentRef.current?.scrollTop > 0) return

      if (timeout.current) {
        clearTimeout(timeout.current)
      }

      timeout.current = setTimeout(() => {
        if (active === 1) {
          const data = software.find((path, index) => index === active - 1)

          return history.push({
            pathname: data.path.split('?')[0],
            search: data.path.split('?')[1],
            state: location.state
          })
        }
      }, 400)
    }

    if (event.changedTouches[0]?.screenY <= touchstartY) {
      // down
      if (!contentRef.current?.scrollHeight && window.innerHeight < 765) return
      if (parseInt(contentRef.current?.scrollHeight - contentRef.current?.scrollTop) > parseInt(contentRef.current?.clientHeight)) return

      if (timeout.current) {
        clearTimeout(timeout.current)
      }

      timeout.current = setTimeout(() => {
        if (active === 0) {
          const data = software.find((page, index) => index === active + 1)
          return history.push({
            pathname: data.path.split('?')[0],
            search: data.path.split('?')[1],
            state: location.state
          })
        }
      }, 400)
    }
  }

  useLayoutEffect(() => {
    handleActive()
  }, [history.location.search])

  return (
    <div
      className="mobile-software__detail"
      onScroll={handleScroll}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className="mobile-software__detail--close">
        <ButtonClose type="mobile" path="/software"/>
      </div>
      <SwitchTransition>
        <CSSTransition
          key={active}
          classNames="main-fade"
          timeout={{ enter: 750, exit: 200 }}
        >
          <>
            {active === 0 && <Header />}
            {active === 1 && <Content />}
          </>
        </CSSTransition>
      </SwitchTransition>
    </div>
  )
}

export default index
