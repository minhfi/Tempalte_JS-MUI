import React, { useLayoutEffect, useRef, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import ButtonClose from '@/components/Buttons/ButtonClose'
import ButtonMouseScroll from '@/components/Buttons/ButtonMouseScroll'
import { useQuery } from '@/util/url'
import Header from './Header'
import Content from './Content'
import { PROJECT } from './constans'

const index = () => {
  const history = useHistory()
  const page = useQuery('page')
  const { project } = useParams()
  const [active, setActive] = useState(0)
  const timeout = useRef(null)
  const contentRef = useRef(null)

  const handleActive = () => {
    const index = PROJECT[project]?.findIndex(item => item.page === page)

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
          const location = PROJECT[project].find((page, index) => index === active + 1)
          return history.push(location.path)
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
          const location = PROJECT[project].find((path, index) => index === active - 1)
          return history.push(location.path)
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

  const renderLayout = () => {
    switch (active) {
      case 0: return <Header/>
      case 1: return <Content contentRef={contentRef}/>
      default: return <Header/>
    }
  }

  return (
    <div className={`software-detail ${!active && 'hidden'}`} onScroll={handleScroll} onWheel={handleWheel}>
      <div className="software-detail__close">
        <ButtonClose path="/software"/>
      </div>
      <SwitchTransition>
        <CSSTransition
          key={active}
          classNames="main-fade"
          timeout={{ enter: 750, exit: 200 }}
        >
          {renderLayout()}
        </CSSTransition>
      </SwitchTransition>
      <ButtonMouseScroll/>
    </div>
  )
}

export default index
