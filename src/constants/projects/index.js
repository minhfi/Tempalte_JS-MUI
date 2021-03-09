import VietjetImg from '_static/image/product-thumbnail/prod_vietjet.png'
import MBBankImg from '_static/image/product-thumbnail/prod_mbbank.png'
import HDBankImg from '_static/image/product-thumbnail/prod_hdbank.png'
import VietinBankImg from '_static/image/product-thumbnail/prod_vietin.png'
import WMCImg from '_static/image/product-thumbnail/prod_wmc.png'
import VBAImg from '_static/image/product-thumbnail/prod_vba.png'
import MauaImg from '_static/image/product-thumbnail/prod_maua.png'
import ACBBankImg from '_static/image/product-thumbnail/prod_acb.png'
import KimAnGroup from '_static/image/product-thumbnail/prod_kiman.png'

// export const allProjectDetails = require
//   .context('.', true, /\.json$/)
//   .keys()
//   .reduce((result, fileName) => {
//     const projectName = fileName.split(/\.|\//)[2]
//     const _path = fileName
//     // Must use require param as a string
//     const content = require(`${_path}`)
//     return {
//       ...result,
//       [projectName]: content
//     }
//   }, {})

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

const allProjectDetails = {
  [projectKeys.VIETIN]: require('./vietin.json'),
  [projectKeys.MBBANK]: require('./mb-bank.json')
}

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
    name: 'Vietjet Air'
  },
  {
    key: projectKeys.VIETIN,
    clientIds: [1],
    workIds: [1, 2, 3],
    image: VietinBankImg,
    name: 'Vietinbank'
  },
  {
    key: projectKeys.MBBANK,
    clientIds: [1],
    workIds: [1],
    image: MBBankImg,
    name: 'MB Ageas Life (MBAL)'
  },
  {
    key: projectKeys.HDBANK,
    clientIds: [1],
    workIds: [1],
    image: HDBankImg,
    name: 'HD Bank'
  },
  {
    key: projectKeys.ACB,
    clientIds: [1],
    workIds: [0, 1],
    image: ACBBankImg,
    name: 'Asia Commercial Bank'
  },
  {
    key: projectKeys.KIMAN,
    clientIds: [1],
    workIds: [],
    image: KimAnGroup,
    name: 'Kim An Group'
  },
  {
    key: projectKeys.WMC,
    clientIds: [2],
    workIds: [0],
    image: WMCImg,
    name: 'WMC'
  },
  {
    key: projectKeys.VBA,
    clientIds: [3],
    workIds: [0],
    image: VBAImg,
    name: 'VBA'
  },
  {
    key: projectKeys.MAUA,
    clientIds: [4],
    workIds: [0, 2, 4],
    image: MauaImg,
    name: 'Maua'
  }
]

const ALL_PROJECT = allProject.map((project) => ({
  ...project,
  details: allProjectDetails[project.key],
  link: `/work/project/${project.key}`
}))

const ALL_PROJECT_DETAIL = allProject.reduce(
  (acc, currentProject, currentIndex, allProject) => {
    acc[currentProject?.key] = {
      ...allProjectDetails[currentProject?.key],
      link: `/work/project/${currentProject?.key}`,
      nextProjectId:
        currentIndex === allProject.length - 1
          ? allProject[0].key
          : allProject[currentIndex + 1].key
    }
    return acc
  },
  {}
)

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

export { ALL_PROJECT, PROJECTS_BY_CLIENT, PROJECT_BY_WORK, ALL_PROJECT_DETAIL }
