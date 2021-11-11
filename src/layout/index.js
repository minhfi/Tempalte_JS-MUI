import React from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

const index = props => {
  return (
    <main id="main" className="main">
      <SwitchTransition className="main-fade">
        <CSSTransition
          key={props.children}
          classNames="main-fade"
          timeout={400}
        >
          {props.children}
        </CSSTransition>
      </SwitchTransition>
    </main>
  )
}

export default index
