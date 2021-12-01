import * as view from '../view'

export default [
  {
    path: '/:type(home|blockchain|software|about)?',
    exact: true,
    component: view.LandingPage
  },

  // blockchhain
  {
    path: '/blockchain/:type(game-fi|academy|lab)',
    exact: true,
    component: view.BlockchainDetail
  },

  // software
  {
    path: '/software/:project(vietjet|maua|wmc|kiman|acb|hd-bank|mb-bank|vietin-bank)',
    exact: true,
    component: view.SoftwareDetail
  },

  {
    path: '*',
    component: view.NotFound
  }
]
