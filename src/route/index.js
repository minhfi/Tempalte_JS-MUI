import React from 'react'
import {
  Route,
  Switch,
  useLocation
} from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import routes from './RoutesConfig'
import Layout from '@/layout'

export const AppRoute = () => {
  const location = useLocation()

  const blackList = ['/home', '/blockchain', '/software', '/about']

  return (
    <Layout>
      <SwitchTransition>
        <CSSTransition
          key={blackList.includes(location.pathname) || location.pathname}
          classNames="main-fade"
          timeout={400}
        >
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
        </CSSTransition>
      </SwitchTransition>
    </Layout>
  )
}

export default AppRoute
