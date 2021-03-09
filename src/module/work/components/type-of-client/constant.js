import VietjetImg from '_static/image/product-thumbnail/prod_vietjet.png'
import MBBankImg from '_static/image/product-thumbnail/prod_mbbank.png'
import HDBankImg from '_static/image/product-thumbnail/prod_hdbank.png'
import VietinBankImg from '_static/image/product-thumbnail/prod_vietin.png'
import WMCImg from '_static/image/product-thumbnail/prod_wmc.png'
import VBAImg from '_static/image/product-thumbnail/prod_vba.png'
import MauaImg from '_static/image/product-thumbnail/prod_maua.png'
import ACBBankImg from '_static/image/product-thumbnail/prod_acb.png'
export const TYPE_OF_CLIENT = [
  {
    title: 'Airline',
    projects: [
      {
        src: VietjetImg,
        link: '/work/project/vietjet',
        title: 'Vietjet Air'
      }
    ]
  },
  {
    title: 'Banking & Finance',
    projects: [
      {
        src: VietinBankImg,
        link: '/work/project/vietin',
        title: 'Vietinbank'
      },
      {
        src: MBBankImg,
        link: '/work/project/mbbank',
        title: 'MB Ageas Life (MBAL)'
      },
      {
        src: HDBankImg,
        link: '/work/project/hdbank',
        title: 'HD Bank'
      },
      {
        src: ACBBankImg,
        link: '/work/project/acb',
        title: 'Asia Commercial Bank'
      }
    ]
  },
  {
    title: 'Hospitality',
    projects: [
      {
        src: WMCImg,
        link: '/work/project/wmc',
        title: 'WMC'
      }
    ]
  },
  {
    title: 'Entertainment',
    projects: [
      {
        src: VBAImg,
        link: '/work/project/vba',
        title: 'VBA'
      }
    ]
  },
  {
    title: 'Technology',
    projects: [
      {
        src: MauaImg,
        link: '/work/project/maua',
        title: 'Maua'
      }
    ]
  }
]
