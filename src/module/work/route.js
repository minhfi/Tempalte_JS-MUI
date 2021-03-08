import ProductCategory from '_module/work/components/product-category'
import TypeOfClient from '_module/work/components/type-of-client'
import TypeOfWork from '_module/work/components/type-of-work'
import WorkLayout from './layout'

const LayoutWorkRoute = [
  {
    path: '/work',
    component: WorkLayout
  }
]

const WorkRoutes = [
  {
    label: 'Type of client',
    path: '/work/type-of-client',
    exact: true,
    component: TypeOfClient
  },
  {
    label: 'Type of work',
    path: '/work/type-of-work',
    exact: true,
    component: TypeOfWork
  },
  {
    label: 'All projects',
    path: '/work/product-category',
    exact: true,
    component: ProductCategory
  }
]

export { WorkRoutes }
export default LayoutWorkRoute
