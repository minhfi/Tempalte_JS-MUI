import notify from '@/util/notify'
import React from 'react'

const index = () => {
  notify({
    type: 'success',
    message: 'Administrator was created successfully!'
  })
  return (
    <div className="home">
      Welcome to Home Page
    </div>
  )
}

export default index
