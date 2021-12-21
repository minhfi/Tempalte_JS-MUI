import React, { useEffect, useState } from 'react'
import {
  Route,
  Switch,
  useLocation
} from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { DesktopRoutes, MobileRoutes } from './RoutesConfig'
import Layout from '@/layout'

export const AppRoute = () => {
  const location = useLocation()
  const routesDefault = window.innerWidth <= 1024 ? MobileRoutes : DesktopRoutes
  const [routes, setRoutes] = useState(routesDefault)

  const blackList = ['/', '/home', '/blockchain', '/software', '/about']
  const active = blackList.includes(location.pathname) ? null : location.pathname

  useEffect(() => {
    window.addEventListener('resize', function(event) {
      if (window.innerWidth <= 1024) {
        return setRoutes(MobileRoutes)
      }

      return setRoutes(DesktopRoutes)
    })

    return () => {
      window.removeEventListener('resize')
    }
  }, [])

  return (
    <Layout>
      <SwitchTransition>
        <CSSTransition
          key={active}
          classNames="main-fade-up"
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
