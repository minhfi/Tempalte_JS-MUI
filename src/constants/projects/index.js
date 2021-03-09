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

const allProjectDetails = {
  vietin: require('./vietin.json')
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
  }
]

const allProject = [
  {
    key: 'vietjet',
    clientIds: [0],
    workIds: [2],
    image: VietjetImg,
    name: 'Vietjet Air'
  },
  {
    key: 'vietin',
    clientIds: [1],
    workIds: [1, 2],
    image: VietinBankImg,
    name: 'Vietinbank'
  },
  {
    key: 'mb-bank',
    clientIds: [1],
    workIds: [1],
    image: MBBankImg,
    name: 'MB Ageas Life (MBAL)'
  },
  {
    key: 'hd-bank',
    clientIds: [1],
    workIds: [1],
    image: HDBankImg,
    name: 'HD Bank'
  },
  {
    key: 'acb',
    clientIds: [1],
    workIds: [0, 1],
    image: ACBBankImg,
    name: 'Asia Commercial Bank'
  },
  {
    key: 'kim-an',
    clientIds: [1],
    workIds: [],
    image: KimAnGroup,
    name: 'Kim An Group'
  },
  {
    key: 'wmc',
    clientIds: [2],
    workIds: [0],
    image: WMCImg,
    name: 'WMC'
  },
  {
    key: 'vba',
    clientIds: [3],
    workIds: [0],
    image: VBAImg,
    name: 'VBA'
  },
  {
    key: 'maua',
    clientIds: [4],
    workIds: [0, 2],
    image: MauaImg,
    name: 'Maua'
  }
]

const ALL_PROJECT = allProject.map(project => ({
  ...project,
  details: allProjectDetails[project.key],
  link: `/work/project/${project.key}`
}))

const filterProjectByClient = (allProject = [], allClient = []) => {
  const result = []
  for (const client of allClient) {
    const projectByClient = allProject.filter(project => project?.clientIds?.includes(client.id))
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
    const projectByWork = allProject.filter(project => {
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
  PROJECTS_BY_CLIENT,
  PROJECT_BY_WORK
}
