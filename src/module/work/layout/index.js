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
        {WorkRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.main || route.component}
          />
        ))}

        {/* <Route path="/work" component={TypeOfClient} /> */}
        {WorkCateRoutes.map((route) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
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
