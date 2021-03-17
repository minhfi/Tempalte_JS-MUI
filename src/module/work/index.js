import React, { useState } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { WorkRoutes, WorkCateRoutes } from '@/module/work/route'
import WorkNavigation from '@/module/work/components/navigation'
import NotFound from '@/components/not-found'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const WorkLayout = () => {
  const location = useLocation()
  const [minHeight, setMinHeight] = useState(0)

  const handleExit = el => {
    const height = el.offsetHeight
    setMinHeight(height)
  }

  const handleExited = () => {
    setMinHeight(0)
  }

  return (
    <div className="work-layout">
      <WorkNavigation />
      <div className="work-layout__body my-container">
        <TransitionGroup className="work-slider" style={{ minHeight: minHeight }}>
          <CSSTransition
            key={location.key}
            classNames="slider"
            timeout={800}
            onExit={handleExit}
            onExited={handleExited}
          >
            <Switch location={location}>
              {[...WorkRoutes, ...WorkCateRoutes].map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  component={route.main || route.component}
                />
              ))}
              <Route component={NotFound} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  )
}

export default WorkLayout
