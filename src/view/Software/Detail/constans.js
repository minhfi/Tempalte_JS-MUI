import VietjectBanner from '@/static/image/software/vietject/vietject-header-banner.png'
import Image1 from '@/static/image/software/vietject/vietject-content-image-1.png'
import Image2 from '@/static/image/software/vietject/vietject-content-image-2.png'

export const VIETJECT = [
  {
    page: 'header',
    path: '/software/vietject?page=header',
    topic: 'Airline',
    project: 'Vietjet Air',
    design: 'UI/UX design',
    technical: 'Front-end development using React',
    year: 'year - 2019',
    banner: VietjectBanner
  },
  {
    page: 'content',
    path: '/software/vietject?page=content',
    background: 'The largest airline in Vietnam by domestic traffic.',
    brief: 'FlightView is a key system used by Vietjet to track and update operational information on every single flight in the network every day.\n The new FlightView has to be more user-friendly with a multiple group of users of different backgrounds and responsibilities (from ground services to senior management). At the same time, the redesigned application has to provide improvement on productivity of users, both in terms of effectiveness and efficiency.',
    solution: 'Our first task was to conduct extensive research on different process flows and user behaviours when interacting with FlightView. The team placed the emphasis on customisability, allowing users of different needs to choose the right amount of key information that is necessary for their daily activities. The new interface will also have to work well across platforms (desktop, tablet and mobile), providing consistent experience. Dinovative then completely overhauled FlightView’s interface, implementing changes based on observations from research while retaining key elements from Vietjet’s branding guidelines. Clean, minimal and easy-to-understand, the design encourages users to optimize the information available, allowing them to complete their tasks quickly with fewer mistakes.',
    images: [Image1, Image2],
    nextProject: 'Maua',
    nextLink: '/software/maua'
  }
]

export const PROJECT = {
  vietject: VIETJECT
}
