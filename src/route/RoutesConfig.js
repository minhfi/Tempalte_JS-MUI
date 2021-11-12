import * as view from '../view'

export default [
  {
    path: '/',
    exact: true,
    component: view.LandingPage
  },
  {
    path: '/:type(home|blockchain|software|about)',
    exact: true,
    component: view.LandingPage
  },
  {
    path: '*',
    component: view.NotFound
  }
]
