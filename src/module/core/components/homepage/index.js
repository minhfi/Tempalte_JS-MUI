/**
 * File name: home.js
 * Created by Visual studio code
 * User: Danh Le / danh.le@dinovative.com
 * Date: 2018-10-22 23:52:59
 */
import React from 'react'
import { connect } from 'react-redux'
import { setLoading } from '@/store/actions'

import Banner from './banner'
import FeaturedProducts from './featured-products'

const Home = () => {
  return (
    <div className="home-page">
      <Banner />
      <FeaturedProducts />
    </div>
  )
}

const mapStateToProps = (state) => ({
  loading: state.loading
})

const mapDispatchToProps = (dispatch) => ({
  setLoading: (loading) => dispatch(setLoading(loading))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
