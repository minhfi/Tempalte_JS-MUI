import { Cursor } from '@/components'
import React from 'react'

const index = props => {
  return (
    <>
      <Cursor/>
      {props.children}
    </>
  )
}

export default index
