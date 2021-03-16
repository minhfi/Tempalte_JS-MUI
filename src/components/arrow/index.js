import React from 'react'
import clsx from 'clsx'

const ArrowLeft = ({ className, color = 'black', ...rest }) => {
  return (
    <div className={className} {...rest}>
      <span className={clsx('arrow-custom left', color)} />
    </div>
  )
}

const ArrowRight = ({ className, color = 'black', ...rest }) => {
  return (
    <div className={className} {...rest}>
      <span className={clsx('arrow-custom right', color)} />
    </div>
  )
}

const ArrowUp = ({ className, color = 'black', ...rest }) => {
  return (
    <div className={className} {...rest}>
      <span className={clsx('arrow-custom up', color)} />
    </div>
  )
}

const ArrowDown = ({ className, color = 'black', ...rest }) => {
  return (
    <div className={className} {...rest}>
      <span className={clsx('arrow-custom down', color)} />
    </div>
  )
}

export { ArrowLeft, ArrowRight, ArrowUp, ArrowDown }
