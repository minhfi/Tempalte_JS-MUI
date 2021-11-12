import * as view from '../index'

export const LandingRoutes = [
  {
    label: 'Home',
    path: '/home',
    exact: true,
    component: view.Home
  },
  {
    label: 'Blockchain',
    path: '/blockchain',
    exact: true,
    component: view.Blockchain
  },
  {
    label: 'Software',
    path: '/software',
    exact: true,
    component: view.Software
  },
  {
    label: 'About',
    path: '/about',
    exact: true,
    component: view.About
  }
]
