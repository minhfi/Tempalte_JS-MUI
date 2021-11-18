
import React from 'react'
import { Cursor } from '@/components'

const index = props => {
  return (
    <div className="main-layout">
      <Cursor/>
      {props.children}
    </div>
  )
}

export default index
