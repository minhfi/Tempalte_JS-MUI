import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { WorkRoutes, WorkCateRoutes } from '@/module/work/route'
import WorkNavigation from '@/module/work/components/navigation'
import NotFound from '@/components/not-found'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import useScrollTop from '@/hooks/useScrollTop'

const WorkLayout = () => {
  const location = useLocation()

  useScrollTop()

  return (
    <div className="work-layout">
      <WorkNavigation />
      <div className="work-layout__body my-container">
        <TransitionGroup className="work-slider">
          <CSSTransition
            key={location.pathname}
            classNames="slider"
            timeout={800}
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
