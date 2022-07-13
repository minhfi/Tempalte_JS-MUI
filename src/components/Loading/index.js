import React from 'react'
import { Box } from '@mui/material'

const Loading = (props) => {
  const classes = [ 'preloader', !props.loading.status ? 'hidden' : '' ].join(
    ' '
  )

  return (
    <Box className={classes}>
      <Box className="preloader-circles">
        <Box className="circle circle-1" />
        <Box className="circle circle-2" />
        <Box className="circle circle-3" />
        <Box className="circle circle-4" />
        <Box className="circle circle-5" />
      </Box>
    </Box>
  )
}

export default Loading
