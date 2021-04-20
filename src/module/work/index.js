import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { WorkRoutes, WorkCateRoutes } from '@/module/work/route'
import WorkNavigation from '@/module/work/components/navigation'
import NotFound from '@/components/not-found'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import useScrollTop from '@/hooks/useScrollTop'
import usePreviousValue from '@/hooks/usePreviousValue'

const WorkLayout = () => {
  const location = useLocation()
  const currentSlider = WorkRoutes.findIndex(el => location.pathname.includes(el.path))
  const preSlider = usePreviousValue(currentSlider)

  const transitionType =
  location.pathname.split('/').length > 3
    ? location.pathname.includes('type-of-work')
      ? 'fly-up'
      : 'fade-in'
    : currentSlider < preSlider ? 'slider reverse' : 'slider'

  useScrollTop()

  return (
    <div className="work-layout">
      <WorkNavigation />
      <div className="work-layout__body">
        <div className="my-container">
          <TransitionGroup
            className={`work-slider work-slider__${transitionType}`}
          >
            <CSSTransition
              key={location.pathname}
              classNames="slider"
              timeout={600}
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
    </div>
  )
}

export default WorkLayout
