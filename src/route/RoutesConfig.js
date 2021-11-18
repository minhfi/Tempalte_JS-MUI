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

  // blockchhain
  {
    path: '/blockchain/game-fi',
    exact: true,
    component: view.BlockchainGameFI
  },
  {
    path: '/blockchain/academy',
    exact: true,
    component: view.BlockchainAcademy
  },
  {
    path: '/blockchain/lab',
    exact: true,
    component: view.BlockchainLab
  },

  // software
  {
    path: '/software/:project',
    exact: true,
    component: view.SoftwareDetail
  },

  {
    path: '*',
    component: view.NotFound
  }
]
