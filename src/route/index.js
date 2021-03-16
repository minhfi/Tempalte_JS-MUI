/**
 * File name: src\route\index.js
 * Created by Visual studio code
 * User: Danh Le / danh.le@dinovative.com
 * Date: 2020-03-31 10:17:24
 */
import Core from '@/module/core/route'
import Todo from '@/module/todo/route'
import Test from '@/module/test/route'
import Work from '@/module/work/route'
import NotFound from '@/components/not-found'

export default [
  ...Core,
  ...Todo,
  ...Test,
  ...Work,
  // last route handle 404 error
  {
    path: '*',
    isPrivate: false,
    component: NotFound
  }
]
