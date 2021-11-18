import React from 'react'
import AppRoute from '@/route'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <AppRoute/>
    </BrowserRouter>
  )
}

export default App
