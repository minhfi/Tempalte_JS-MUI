import React from 'react'

const Button = ({ children, disabled, bordered, className, ...props }) => {
  const classes = [
    'button',
    'button--filled',
    disabled ? 'button--disabled' : '',
    bordered ? 'button--bordered' : '',
    className
  ].join(' ')
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
