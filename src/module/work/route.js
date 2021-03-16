import ProductInformations from '@/module/work/components/product-detail'
import ProductCategory from '@/module/work/components/product-category'
import TypeOfClient from '@/module/work/components/type-of-client'
import TypeOfWork from '@/module/work/components/type-of-work'
import ClientCategory from './components/type-of-client/client-category'
import WorkCategory from './components/type-of-work/work-category'
import WorkLayout from './layout'

const LayoutWorkRoute = [
  {
    path: '/work/:type(type-of-client|type-of-work|product-category)?/:cate?',
    exact: true,
    component: WorkLayout
  },
  {
    path: '/work/:type(project)/:id',
    exact: true,
    component: ProductInformations
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

const WorkCateRoutes = [
  {
    path: '/work',
    exact: true,
    component: TypeOfClient
  },
  {
    path: '/work/type-of-client/:cate',
    exact: true,
    component: ClientCategory
  },
  {
    path: '/work/type-of-work/:cate',
    exact: true,
    component: WorkCategory
  }
]

export { WorkRoutes, WorkCateRoutes }
export default LayoutWorkRoute
