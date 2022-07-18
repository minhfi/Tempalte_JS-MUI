import React, { useMemo } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider, useSelector } from 'react-redux'
import { createTheme, ThemeProvider } from '@mui/material'
import { genThemeWithPaletteMode } from '@/constants/theme'
import { getTheme } from '@/store/selectors/theme'
import AppRoute from '@/route'
import store from '@/store'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'react-toastify/dist/ReactToastify.css'

const AppTheme = () => {
  const paletteMode = useSelector(getTheme)

  // Update the theme only if the mode changes
  const theme = useMemo(
    () => createTheme(genThemeWithPaletteMode(paletteMode.mode)),
    [paletteMode]
  )

  return (
    <ThemeProvider theme={theme}>
      <AppRoute/>
    </ThemeProvider>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppTheme/>
      </BrowserRouter>
    </Provider>
  )
}

export default App
