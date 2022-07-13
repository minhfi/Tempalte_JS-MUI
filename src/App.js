import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import AppRoute from '@/route'
import store from '@/store'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoute/>
      </BrowserRouter>
    </Provider>
  )
}

export default App
