import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Typography } from '@mui/material'
import { setTheme } from '@/store/actions/theme'
import { getTheme } from '@/store/selectors/theme'
import { THEME } from '@/constants'
import { STButton, STContainer } from './styled'

const index = () => {
  const dispatch = useDispatch()
  const paletteMode = useSelector(getTheme)

  const handleChangeTheme = () => {
    if (paletteMode.mode === THEME.LIGHT) {
      return dispatch(setTheme(THEME.DARK))
    }

    return dispatch(setTheme(THEME.LIGHT))
  }

  return (
    <STContainer>
      <Typography variant="h4">
        Welcome to Home Page
      </Typography>

      <STButton onClick={handleChangeTheme}>
        THEME
      </STButton>
    </STContainer>
  )
}

export default index
