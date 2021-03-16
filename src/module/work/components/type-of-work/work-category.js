import React from 'react'
import { useParams } from 'react-router'
import { PROJECT_BY_WORK } from '@/constants/projects'
import ProductCategory from '../product-category'

const WorkCategory = () => {
  let projectByCategory = []
  const { cate } = useParams()

  if (cate) {
    projectByCategory =
      PROJECT_BY_WORK.filter((project) => project.key === cate) || []
  }
  return (
    <ProductCategory
      title={projectByCategory[0]?.name}
      projects={projectByCategory[0]?.projects || []}
    />
  )
}

export default WorkCategory
