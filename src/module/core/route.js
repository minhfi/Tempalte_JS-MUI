/**
 * File name: route.js
 * Created by Visual studio code
 * User: Danh Le / danh.le@dinovative.com
 * Date: 2019-01-16 22:14:33
 */
// import React, { Component } from 'react'
import Home from '@/module/core/components/homepage'
import Forbidden from '@/components/forbidden'
import NotFound from '@/components/not-found'
export default [
  {
    label: 'Home',
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/403',
    component: Forbidden
  },
  {
    path: '/404',
    component: NotFound
  }
]
