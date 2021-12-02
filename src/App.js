import React from 'react'
import AppRoute from '@/route'
import { BrowserRouter } from 'react-router-dom'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const App = () => {
  return (
    <BrowserRouter>
      <AppRoute/>
    </BrowserRouter>
  )
}

export default App
