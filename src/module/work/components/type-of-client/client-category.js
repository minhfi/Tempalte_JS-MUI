import React from 'react'
import { useParams } from 'react-router'
import { PROJECTS_BY_CLIENT } from '@/constants/projects'
import ProductCategory from '../product-category'

const ClientCategory = () => {
  let projectByCategory = []
  const { cate } = useParams()

  if (cate) {
    projectByCategory =
      PROJECTS_BY_CLIENT.filter((project) => project.key === cate) || []
  }
  return (
    <ProductCategory
      title={projectByCategory[0]?.name}
      projects={projectByCategory[0]?.projects || []}
    />
  )
}

export default ClientCategory
