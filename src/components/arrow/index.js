import React from 'react'
import clsx from 'clsx'

const ArrowLeft = ({ className, white, black, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <span
        className={clsx(
          'arrow-custom left',
          white ? 'white' : '',
          black ? 'black' : ''
        )}
      />
    </div>
  )
}

const ArrowRight = ({ className, white, black, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <span
        className={clsx(
          'arrow-custom right',
          white ? 'white' : '',
          black ? 'black' : ''
        )}
      />
    </div>
  )
}

const ArrowUp = ({ className, white, black, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <span
        className={clsx(
          'arrow-custom up',
          white ? 'white' : '',
          black ? 'black' : ''
        )}
      />
    </div>
  )
}

const ArrowDown = ({ className, white, black, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <span
        className={clsx(
          'arrow-custom down',
          white ? 'white' : '',
          black ? 'black' : ''
        )}
      />
    </div>
  )
}

export { ArrowLeft, ArrowRight, ArrowUp, ArrowDown }
