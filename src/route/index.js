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

  const blackList = ['/', '/home', '/blockchain', '/software', '/about']
  const active = blackList.includes(location.pathname) ? null : location.pathname

  return (
    <Layout>
      <SwitchTransition>
        <CSSTransition
          key={active}
          classNames="main-fade"
          timeout={{ enter: 750, exit: 200 }}
        >
          <Switch location={location}>
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
