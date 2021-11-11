import { Cursor } from '@/components'
import React from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

const index = props => {
  return (
    <>
      <Cursor/>
      <SwitchTransition className="main-fade">
        <CSSTransition
          key={props.children}
          classNames="main-fade"
          timeout={400}
        >
          {props.children}
        </CSSTransition>
      </SwitchTransition>
    </>
  )
}

export default index
