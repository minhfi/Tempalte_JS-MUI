import * as view from '../view'

export const DesktopRoutes = [
  {
    path: '/',
    exact: true,
    component: view.Home
  },

  {
    path: '*',
    component: view.NotFound
  }
]

export const MobileRoutes = [
  {
    path: '/home',
    exact: true,
    component: view.Home
  },

  {
    path: '*',
    component: view.NotFound
  }
]
