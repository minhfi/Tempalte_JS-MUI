import WMCImg from '_static/image/product-thumbnail/prod_wmc.svg'
import VBAImg from '_static/image/product-thumbnail/prod_vba.svg'
import MauaImg from '_static/image/product-thumbnail/prod_maua.svg'
import MBBankImg from '_static/image/product-thumbnail/prod_mbbank.svg'
import HDBankImg from '_static/image/product-thumbnail/prod_hdbank.svg'
import VietjetImg from '_static/image/product-thumbnail/prod_vietjet.svg'
import ACBBankImg from '_static/image/product-thumbnail/prod_acb.svg'
import KimAnGroup from '_static/image/product-thumbnail/prod_kiman.svg'
import VietinBankImg from '_static/image/product-thumbnail/prod_vietin.svg'

const projectKeys = {
  ACB: 'acb',
  VBA: 'vba',
  WMC: 'wmc',
  MAUA: 'maua',
  KIMAN: 'kim-an',
  VIETIN: 'vietin',
  MBBANK: 'mb-bank',
  HDBANK: 'hd-bank',
  VIETJET: 'vietjet'
}

const requireHTML = (key) => {
  return {
    left_content: require(`@/constants/html/${key}/left.html`),
    right_content: require(`@/constants/html/${key}/right.html`)
  }
}

export const allProjectDetails = require
  .context('@/constants/json', true, /\.json$/)
  .keys()
  .reduce((result, fileName) => {
    const projectName = fileName.split(/\.|\//)[2]

    // Must use require param as a string
    const content = require(`@/constants/json/${projectName}.json`)
    return {
      ...result,
      [projectName]: { ...content, ...requireHTML(projectName) }
    }
  }, {})

const TYPE_OF_CLIENT = [
  {
    id: 0,
    key: 'air-line',
    name: 'Airline'
  },
  {
    id: 1,
    key: 'banking-finance',
    name: 'Banking & Finance'
  },
  {
    id: 2,
    key: 'hospitality',
    name: 'Hospitality'
  },
  {
    id: 3,
    key: 'entertainment',
    name: 'Entertainment'
  },
  {
    id: 4,
    key: 'technology',
    name: 'Technology'
  }
]

const TYPE_OF_WORK = [
  {
    id: 2,
    key: 'crm',
    name: 'CRM'
  },
  {
    id: 1,
    key: 'website',
    name: 'Website'
  },
  {
    id: 0,
    key: 'application',
    name: 'Application'
  },
  {
    id: 3,
    key: 'internet-banking',
    name: 'Internet Banking'
  },
  {
    id: 4,
    key: 'ecommerce-platform',
    name: 'Ecommerce Platform'
  }
]

const allProject = [
  {
    key: projectKeys.VIETJET,
    clientIds: [0],
    workIds: [2],
    image: VietjetImg,
    name: 'Vietjet Air',
    isFeatured: false
  },
  {
    key: projectKeys.VIETIN,
    clientIds: [1],
    workIds: [1, 2, 3],
    image: VietinBankImg,
    name: 'Vietinbank',
    isFeatured: false
  },
  {
    key: projectKeys.MBBANK,
    clientIds: [1],
    workIds: [1],
    image: MBBankImg,
    name: 'MB Ageas Life (MBAL)',
    isFeatured: true
  },
  {
    key: projectKeys.HDBANK,
    clientIds: [1],
    workIds: [1],
    image: HDBankImg,
    name: 'HD Bank',
    isFeatured: true
  },
  {
    key: projectKeys.ACB,
    clientIds: [1],
    workIds: [0, 1],
    image: ACBBankImg,
    name: 'Asia Commercial Bank',
    isFeatured: false
  },
  {
    key: projectKeys.KIMAN,
    clientIds: [1],
    workIds: [],
    image: KimAnGroup,
    name: 'Kim An Group',
    isFeatured: true
  },
  {
    key: projectKeys.WMC,
    clientIds: [2],
    workIds: [0],
    image: WMCImg,
    name: 'WMC',
    isFeatured: true
  },
  {
    key: projectKeys.VBA,
    clientIds: [3],
    workIds: [0],
    image: VBAImg,
    name: 'VBA',
    isFeatured: false
  },
  {
    key: projectKeys.MAUA,
    clientIds: [4],
    workIds: [0, 2, 4],
    image: MauaImg,
    name: 'Maua',
    isFeatured: true
  }
]

const ALL_PROJECT = allProject.map((project) => ({
  ...project,
  link: `/work/project/${project.key}`
}))

// Map detail of all project by project key
const ALL_PROJECT_DETAIL = allProject.reduce(
  (acc, currentProject, currentIndex, allProject) => {
    acc[currentProject?.key] = {
      ...allProjectDetails[currentProject?.key],
      link: `/work/project/${currentProject?.key}`, // for direct to next project when click header information of next project
      nextProjectId:
        currentIndex === allProject.length - 1
          ? allProject[0].key
          : allProject[currentIndex + 1].key
    }
    return acc
  },
  {}
)

// Filter featured project to show in homepage
const FEATURED_PROJECTS = ALL_PROJECT.filter((project) => project.isFeatured)

// Filter banner of project which has detail information
const PROJECT_BANNERS = Object.keys(allProjectDetails).map((projectKeys) => ({
  title: allProjectDetails[projectKeys].name,
  image: allProjectDetails[projectKeys].banner,
  description: allProjectDetails[projectKeys].description,
  link: `/work/project/${projectKeys}`
}))

const filterProjectByClient = (allProject = [], allClient = []) => {
  const result = []
  for (const client of allClient) {
    const projectByClient = allProject.filter((project) =>
      project?.clientIds?.includes(client.id)
    )
    result.push({
      ...client,
      projects: projectByClient
    })
  }
  return result
}

const filterProjectByWork = (allProject = [], allWork = []) => {
  const result = []
  for (const work of allWork) {
    const projectByWork = allProject.filter((project) => {
      return project?.workIds?.includes(work.id)
    })
    result.push({
      ...work,
      projects: projectByWork
    })
  }
  return result
}

const PROJECTS_BY_CLIENT = filterProjectByClient(ALL_PROJECT, TYPE_OF_CLIENT)
const PROJECT_BY_WORK = filterProjectByWork(ALL_PROJECT, TYPE_OF_WORK)

export {
  ALL_PROJECT,
  ALL_PROJECT_DETAIL,
  FEATURED_PROJECTS,
  PROJECTS_BY_CLIENT,
  PROJECT_BY_WORK,
  PROJECT_BANNERS,
  TYPE_OF_CLIENT,
  TYPE_OF_WORK
}
