import React, { useLayoutEffect, useRef, useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import ButtonClose from '@/components/Buttons/ButtonClose'
import ButtonMouseScroll from '@/components/Buttons/ButtonMouseScroll'
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

  const handleActive = () => {
    const index = software?.findIndex(item => item.page === page)

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
      if (contentRef.current > 0) return

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
    contentRef.current = e.target.scrollTop
  }

  useLayoutEffect(() => {
    handleActive()
  }, [history.location.search])

  return (
    <div className={`software-detail ${!active && 'hidden'}`} onScroll={handleScroll} onWheel={handleWheel}>
      <div className="software-detail__close">
        <ButtonClose path="/software"/>
      </div>
      <SwitchTransition>
        <CSSTransition
          key={active}
          classNames="main-fade-up"
          timeout={{ enter: 750, exit: 200 }}
        >
          <>
            {active === 0 && <Header/>}
            {active === 1 && <Content contentRef={contentRef}/>}
          </>
        </CSSTransition>
      </SwitchTransition>
      <ButtonMouseScroll/>
    </div>
  )
}

export default index
