import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function TitleCounter({ to, label, count = 0 }) {
  const Comp = to ? Link : Fragment
  const compProps = to
    ? {
      to,
      className: 'title-counter__wrap'
    }
    : {}

  return (
    <Comp {...compProps}>
      <div className="title-counter">
        <span>{label}</span>
        <span>{count}</span>
      </div>
    </Comp>
  )
}
