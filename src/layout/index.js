
import React from 'react'
import { Cursor } from '@/components'

const index = props => {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  const vh = window.innerHeight * 0.01
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`)

  return (
    <div className="main-layout">
      {window.innerWidth > 1024 && <Cursor/>}
      {props.children}
    </div>
  )
}

export default index
