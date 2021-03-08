import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { WorkRoutes } from '_module/work/route'
import WorkNavigation from '_module/work/components/navigation'

const WorkLayout = () => {
  return (
    <div>
      <WorkNavigation />
      <Switch>
        {WorkRoutes.map((route) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.main || route.component}
          />
        ))}
      </Switch>
    </div>
  )
}

export default WorkLayout
