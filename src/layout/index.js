
import React from 'react'
import { Cursor } from '@/components'

const index = props => {
  return (
    <div className="main-layout">
      {window.innerWidth > 1024 && <Cursor/>}
      {props.children}
    </div>
  )
}

export default index
