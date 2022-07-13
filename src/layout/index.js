
import React from 'react'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { getLoading } from '@/store/selectors/loading'
import Loading from '@/components/Loading'

const index = props => {
  const loading = useSelector(getLoading)

  return (
    <div className="main-layout">
      {props.children}

      <Loading loading={loading} />

      <ToastContainer
        className="snackbar-container"
        toastClassName="snackbar-item"
        bodyClassName="snackbar-body"
        autoClose={5000}
        hideProgressBar
        draggable={false}
        pauseOnHover={false}
        closeOnClick={false}
        pauseOnFocusLoss={false}
        newestOnTop
      />
    </div>
  )
}

export default index
