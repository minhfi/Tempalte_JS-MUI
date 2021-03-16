import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { WorkRoutes, WorkCateRoutes } from '@/module/work/route'
import WorkNavigation from '@/module/work/components/navigation'
import NotFound from '@/components/not-found'

const WorkLayout = () => {
  return (
    <div className="work-layout">
      <WorkNavigation />
      <div className="work-layout__body my-container">
        <Switch>
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
      </div>
    </div>
  )
}

export default WorkLayout
