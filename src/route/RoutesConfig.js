import * as view from '../view'

export default [
  {
    path: '/',
    exact: true,
    component: view.HomePage
  },

  {
    path: '*',
    component: view.NotFound
  }
]
