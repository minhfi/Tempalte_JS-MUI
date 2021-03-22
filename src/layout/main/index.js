/**
 * File name: src\layout\main\index.js
 * Created by Visual studio code
 * User: Danh Le / danh.le@dinovative.com
 * Date: 2020-04-12 23:21:53
 */
import React from 'react'
import Routes from '@/route'
import { Switch, Route, useLocation, matchPath } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

export default function index() {
  const location = useLocation()
  const nodeRef = React.useRef(null)
  const routeMatch = Routes.find((route) => {
    return matchPath(location.pathname, route)
  })

  return (
    <main id="main" className="main">
      <SwitchTransition className="main-fade">
        <CSSTransition
          nodeRef={nodeRef}
          key={routeMatch.path}
          classNames="main-fade"
          timeout={400}
        >
          <Switch location={location}>
            {Routes.map((route) => (
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
        </CSSTransition>
      </SwitchTransition>
    </main>
  )
}
