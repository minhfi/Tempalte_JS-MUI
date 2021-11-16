import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Layout from '@/layout'
import routes from './RoutesConfig'

export const AppRoute = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          {routes.map(r => (
            <Route
              key={r.path}
              exact={r.exact}
              path={r.path}
              component={r.component}
            />
          ))}
        </Switch>
      </Layout>

    </Router>
  )
}

export default AppRoute
