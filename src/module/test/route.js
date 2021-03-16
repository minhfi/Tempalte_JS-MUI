/**
 * File name: route.js
 * Created by Visual studio code
 * User: Danh Le / danh.le@dinovative.com
 * Date: 2019-01-16 22:18:07
 */
import List from '@/module/test/components/list'
import Detail from '@/module/test/components/detail'

export default [
  {
    label: 'Test',
    path: '/tests',
    exact: true,
    component: List
  },
  {
    path: '/tests/create',
    exact: true,
    component: Detail
  },
  {
    path: '/tests/:id',
    exact: true,
    component: Detail
  }
]
