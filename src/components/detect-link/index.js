import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

const DetectLink = ({ to, children, ...props }) => {
  const Comp = to ? Link : Fragment
  const compProps = to
    ? {
        className: clsx('detect-link', props.className),
        to,
        ...props
      }
    : {}

  return <Comp {...compProps}>{children}</Comp>
}

export default DetectLink
