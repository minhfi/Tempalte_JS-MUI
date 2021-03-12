import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { WorkRoutes, WorkCateRoutes } from '_module/work/route'
import WorkNavigation from '_module/work/components/navigation'
import NotFound from '_components/not-found'

const WorkLayout = () => {
  return (
    <div className="container">
      <WorkNavigation />
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
  )
}

export default WorkLayout
