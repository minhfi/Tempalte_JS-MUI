import * as view from '../view'

export default [
  {
    path: '/',
    exact: true,
    component: view.LandingPage
  },
  {
    path: '/home',
    exact: true,
    component: view.HomePage
  },
  {
    path: '/blockchain',
    exact: true,
    component: view.Blockchain
  },
  {
    path: '/software',
    exact: true,
    component: view.Software
  },
  {
    path: '/about',
    exact: true,
    component: view.About
  },

  {
    path: '*',
    component: view.NotFound
  }
]
