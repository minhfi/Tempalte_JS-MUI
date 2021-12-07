import VietjectBanner from '@/static/image/software/vietject/header-banner.svg'
import VietjectImage1 from '@/static/image/software/vietject/content-image-1.png'
import VietjectImage2 from '@/static/image/software/vietject/content-image-2.png'

import VietjectWebsiteBanner from '@/static/image/software/vietjet-website/header-banner.svg'
import VietjectWebsiteImage1 from '@/static/image/software/vietjet-website/content-image-1.png'
import VietjectWebsiteImage2 from '@/static/image/software/vietjet-website/content-image-2.png'

import MauaBanner from '@/static/image/software/maua/header-banner.svg'
import MauaImage1 from '@/static/image/software/maua/content-image-1.png'
import MauaImage2 from '@/static/image/software/maua/content-image-2.png'

import WMCBanner from '@/static/image/software/wmc/header-banner.svg'
import WMCImage1 from '@/static/image/software/wmc/content-image-1.png'
import WMCImage2 from '@/static/image/software/wmc/content-image-2.png'

import KimanBanner from '@/static/image/software/kiman/header-banner.svg'
import KimanImage1 from '@/static/image/software/kiman/content-image-1.png'
import KimanImage2 from '@/static/image/software/kiman/content-image-2.png'

import ABCBanner from '@/static/image/software/acb/header-banner.svg'
import ABCImage1 from '@/static/image/software/acb/content-image-1.png'
import ABCImage2 from '@/static/image/software/acb/content-image-2.png'

import HDBankBanner from '@/static/image/software/hdbank/header-banner.svg'
import HDBankImage1 from '@/static/image/software/hdbank/content-image-1.png'
import HDBankImage2 from '@/static/image/software/hdbank/content-image-2.png'

import MBBankBanner from '@/static/image/software/mb/header-banner.svg'
import MBBankImage1 from '@/static/image/software/mb/content-image-1.png'
import MBBankImage2 from '@/static/image/software/mb/content-image-2.png'

import VietinBanner from '@/static/image/software/vietin/header-banner.svg'
import VietinImage1 from '@/static/image/software/vietin/content-image-1.png'
import VietinImage2 from '@/static/image/software/vietin/content-image-2.png'

export const VIETJET = [
  {
    page: 'header',
    path: '/software/vietjet?page=header',
    topic: 'Airline',
    project: 'Vietjet Air',
    technical: 'UI/UX design\n Front-end development using ReactJS \n Back-end development using NodeJS',
    year: 'year - 2019',
    banner: VietjectBanner
  },
  {
    page: 'content',
    path: '/software/vietjet?page=content',
    background: 'The largest airline in Vietnam by domestic traffic.',
    brief:
      'FlightView is a key system used by Vietjet to track and update operational information on every single flight in the network every day.\n The new FlightView has to be more user-friendly with a multiple group of users of different backgrounds and responsibilities (from ground services to senior management). At the same time, the redesigned application has to provide improvement on productivity of users, both in terms of effectiveness and efficiency.',
    solution:
      'Our first task was to conduct extensive research on different process flows and user behaviours when interacting with FlightView. The team placed the emphasis on customizability, allowing users of different needs to choose the right amount of key information that is necessary for their daily activities. The new interface will also have to work well across platforms (desktop, tablet and mobile), providing consistent experience. Dinovative then completely overhauled FlightView’s interface, implementing changes based on observations from research while retaining key elements from Vietjet’s branding guidelines. Clean, minimal and easy-to-understand, the design encourages users to optimize the information available, allowing them to complete their tasks quickly with fewer mistakes.',
    images: [VietjectImage1, VietjectImage2],
    nextProject: 'Maua',
    nextLink: '/software/maua'
  }
]

export const VIETJET_WEBSITE = [
  {
    page: 'header',
    path: '/software/vietjet?page=header',
    topic: 'Airline',
    project: 'Vietjet Website',
    technical: 'UI/UX design\n Front-end development using ReactJS \n Back-end development using NodeJS',
    year: 'year - 2021',
    banner: VietjectWebsiteBanner
  },
  {
    page: 'content',
    path: '/software/vietjet?page=content',
    background: 'The largest airline in Vietnam by domestic traffic. After 10 years, the airline decided to do a complete overhaul of its current website/booking engine.',
    brief:
      'The flight booking website is the central piece of the business of any airline in the world. After enjoying a tremendous growth in the last 10 years, Vietjet decided to redesign its website along with its booking engine underneath, a work deemed to be long overdue by the BOD. The new website needs to present a new & modern look which is appealing to the youth - Vietjet’s main customer segment. The technical solution also had to provide Vietjet’s management team more control and flexibility on how to sell tickets since the old solution was based on an old proprietary solution.',
    solution:
      'Dinovative took the technology lead responsibility, worked closely with various Vietjet’s departments to design and implement the new platform from scratch. The solution is fully deployed on AWS and we have worked with AWS Asia to design an optimal micro-services solution based on AWS advanced infrastructure and technology. The complete solution includes: User Management, CMS for the website and Orchestration Layer for the booking engine. The system also passed the performance test from Vietjet with 15000 CCU.',
    images: [VietjectWebsiteImage1, VietjectWebsiteImage2],
    nextProject: 'Maua',
    nextLink: '/software/maua'
  }
]

export const MAUA = [
  {
    page: 'header',
    path: '/software/maua?page=header',
    topic: 'Ecommerce',
    project: 'Maua',
    technical: 'UI/UX design\n Front-end development using ReactJS\n Back-end development using NodeJS',
    year: 'year - 2019',
    banner: MauaBanner
  },
  {
    page: 'content',
    path: '/software/maua?page=content',
    background: 'Founded in 2013 in Apia, Samoa, SkyEYE Pacific is an award- winning, international technology firm which utilises geospatial technology to develop vehicle tracking systems. SkyEYE solutions are widely used by corporates in Samoa, Tonga, Vanuatu and the Salomon Islands, providing cost saving and efficiency improvement benefits.',
    brief: 'In early 2019, SkyEYE selected Dinosys as a technology partner to help it build Maua, an online platform offering ecommerce services for citizens in Samoa, an island with almost no physical address system. With a long-term vision of contributing to the digitisation of Samoa, the project is scoped for 1 year, including 3 websites and 3 separate apps. Despite the challenges of relatively short delivery schedule and timing, language and cultural differences, SkyEYE and Dinosys managed to work well together and have the first launch in early June, just in time to celebrate the Opening Ceremony for the 16th Pacific Games, the most important event of the year.',
    solution: 'Dinovative took the lead responsibilities and worked closely with Skyeye to design and implement a tailor-made and fully-customized solution for Maua. The E-commerce solutions includes 3 websites, 3 separate applications which are: buyer platform, vendor platform, driver platform and admin portal. After fully-launched, Dinovative was also responsible for developing MauaPay, an integrated payment hub for users to settle transactions on Maua platform. The solution also provides a secured payment method to transfer money abroad or vice versa.',
    images: [MauaImage1, MauaImage2],
    nextProject: 'WMC',
    nextLink: '/software/wmc'
  }
]

export const WMC = [
  {
    page: 'header',
    path: '/software/wmc?page=header',
    topic: 'Hospitality',
    project: 'WMC',
    technical: 'UI/UX design\n Mobile app development using React Native\n Loyalty web portal using Java',
    year: 'year - 2016',
    banner: WMCBanner
  },
  {
    page: 'content',
    path: '/software/wmc?page=content',
    background: 'WMC is a hospitality and property services management company headquartered in Ho Chi Minh city. The company’s diverse management portfolio includes hotels, serviced apartments, offices, restaurants, and commercial shopping centres.',
    brief: 'WMC Prestige is a luxury loyalty program. After running for 15 years, WMC wanted an upgrade to give its members added flexibility and benefits, utilising the different services managed by the company. Previously, members only received preferred recognition and benefits at WMC-managed restaurants. Under the new scheme, loyal customers now enjoy special discounts and promotions across a network of 17 restaurants, 4 properties (hotels and serviced apartments) and 2 spas.',
    solution: 'Dinovative worked with business to design a program that would integrate benefits from all participating services. Customer data from different sources were consolidated into one centrally -managed database. Another important component of the project included operational tools for the WMC management team, including fully customisable marketing functions, reports and business intelligence. We also designed and developed a new WMC Prestige app (for both iOS and Android), implementing the WMC branding guidelines and the integrated benefit system to create a welcoming platform that is capable of attracting and engaging loyal customers.',
    images: [WMCImage1],
    nextProject: 'Kim An',
    nextLink: '/software/kiman'
  }
]

export const KIMAN = [
  {
    page: 'header',
    path: '/software/kiman?page=header',
    topic: 'Banking & Finance',
    project: 'Kim An',
    technical: 'UI/UX design\n Full-stack development using Ruby',
    year: 'year - 2018',
    banner: KimanBanner
  },
  {
    page: 'content',
    path: '/software/kiman?page=content',
    background: 'As one of the fastest-growing microfinance companies in Vietnam, Kim An’s management decided to make big investments in IT to support its astonishing growth. The premier solution of this strategy is to build a full-fledged, cross-platform CRM that helps monitor and manage day-to-day client-facing operations.',
    brief: 'The system covers end-to-end operation from lead generation through the whole customer life cycle. The CRM should fully-integrate to Kim An’s core microfinance system, aiming to provide as much automation as possible. Lastly, the solution has to meet the reliability and scalability of Kim An’s business which typically handles millions of active contracts.',
    solution: 'Dinovative took the technology lead responsibilities and worked closely with business to design and implement a tailor-made and fully-customized solution for Kim An’s specific requirements. The solution is implemented on multiple platforms: 2 website portals, one for operations and one for admin functions and 2 applications on iOS and Androids. The whole infrastructure of the system is deployed on AWS for maximum uptime and efficiency. The project is scheduled for 3 years with multiple phases with the first phase has gone live for the past 6 months with volume of million contracts and customers.',
    images: [KimanImage1, KimanImage2],
    nextProject: 'ACB',
    nextLink: '/software/acb'
  }
]

export const ACB = [
  {
    page: 'header',
    path: '/software/acb?page=header',
    topic: 'Banking & Finance',
    project: 'ACB',
    technical: 'UI/UX design\n Front-end development using ReactJS\n Back-end development using NodeJS',
    year: 'year - 2017',
    banner: ABCBanner
  },
  {
    page: 'content',
    path: '/software/acb?page=content',
    background: 'Asia Commercial Bank (ACB) is the largest private bank in Vietnam by assets. In 2017, to celebrate its 25th anniversary, the bank implemented a series of new applications as part of its digital transformation. ACB Lifestyle platform was one of the key initiatives.',
    brief: 'ACB Lifestyle is a platform, through which service providers and product sellers can reach out to ACB cardholders and provide them with information on new products, incentive programs and attractive offers. Loyal customers of ACB can use the platform to enjoy special benefits exclusively tailored to their location and preferences.',
    solution: 'Dinovative was responsible for both front-end and back-end development of the project, including a microsite and mobile apps on both iOS and Android. Front-end for mobile used React Native and front-end for microsite used ReactJS. For the back-end, we used NodeJS, MongoDB and ExpressJS.',
    images: [ABCImage1, ABCImage2],
    nextProject: 'HDBank',
    nextLink: '/software/hd-bank'
  }
]

export const HDBANK = [
  {
    page: 'header',
    path: '/software/hd-bank?page=header',
    topic: 'Banking & Finance',
    project: 'HDBank',
    technical: 'UI/UX design\n Front-end development using ReactJS',
    year: 'year - 2018',
    banner: HDBankBanner
  },
  {
    page: 'content',
    path: '/software/hd-bank?page=content',
    background: 'One of the 20 largest companies by market capitalization on HoSE, HDBank needs little introduction. Having gone public recently and recognised technology as one of the key drivers of growth for the next 5-10 years, the bank decided to pursue an aggressive digital transformation program, starting with a complete overhaul of its website.',
    brief: 'The new website needs to capture the essence of the new brand strategy that the banks want to implement for the next 5 years: focus on retail banking, customer centric and international integration. The website also had to inspire the customers with the feeling of trust,  appealing and ease of use, while also maintaining the image of a “financial supermarket”.',
    solution: 'Our approach focused on consolidating information into customer-focused categories, while providing context and curation throughout and designing a user experience that makes it easy to find and discover relevant products and services from within HDBank’s extensive portfolio. Clean and modern design elements provide hints on where to go next – making both navigating the site and browsing the products and services effortless and enjoyable.',
    images: [HDBankImage1, HDBankImage2],
    nextProject: 'MB Ageas life',
    nextLink: '/software/mb-bank'
  }
]

export const MBBANK = [
  {
    page: 'header',
    path: '/software/mb-bank?page=header',
    topic: 'Banking & Finance',
    project: 'MB Ageas life',
    technical: 'UI/UX design\n Front-end development using ReactJS\n Back-end development using Ruby',
    year: 'year - 2019',
    banner: MBBankBanner
  },
  {
    page: 'content',
    path: '/software/mb-bank?page=content',
    background: 'Established in 2016, MB Ageas Life (MBAL) has quickly become one of the rising stars of the insurance market in Vietnam: the company is ranked #5 in Bancassurance while employing 2400+ agents across 2 Head offices in Hanoi and Ho Chi Minh city.',
    brief: 'In 2019, MBAL decided to develop a Sales Portal to manage its growing business opportunities, provide its sales force with efficient support and improve customer experiences.  The solution provides a single source of truth for customer data, covering the entire journey: from leads to applications all the way to premium collection and customer services. It also establishes a centralised platform for collaboration between sales staff and supporting functions: marketing & campaign incentives, operations, training & management etc. to ensure a consistent experience for all customers when interacting with MBAL.',
    solution: 'Phase 1 of the project was completed in 4 months for the following modules: Lead management, Activity management, Customer interaction history, Notification management; with subsequent phases scheduled for 2020 and beyond.',
    images: [MBBankImage1, MBBankImage2],
    nextProject: 'VietinBank',
    nextLink: '/software/vietin-bank'
  }
]

export const VIETIN = [
  {
    page: 'header',
    path: '/software/vietin-bank?page=header',
    topic: 'Banking & Finance',
    project: 'VietinBank',
    technical: 'UI/UX design\n Front-end development using ReactJS\n Back-end development using NodeJS',
    year: 'year - 2020',
    banner: VietinBanner
  },
  {
    page: 'content',
    path: '/software/vietin-bank?page=content',
    background: 'VietinBank is one of the biggest banks in Vietnam (top 4 by market capitalization, 2019), top 10 most valuable brand in Vietnam 2019 (the highest among all banks), its name reflects prestige and highest standard among banking and financial sectors. In 2020, VietinBank decided to overhaul its Internet Banking (iPay website) in the light of fierce competition from traditional and new rivals.',
    brief: 'The two most important requirements for the new iPay website were “different” from all other competitors while maintaining the essence of the prestige brand,  along with other standard requirements such as “functional”, “modern”. In terms of technical requirements, VietinBank also has very strict policies regarding security, performance that we had to meet, especially since the system would be deployed on AWS, a very first large-scale banking project in Vietnam to do so.',
    solution: 'Our first task was to conduct intensive competitive research from other rivals such as: Vietcombank, VIB, BIDV and HSBC. After that, along with the guidelines from the client, we came up with the design concept that focuses on a few key elements: ease of use, functional, flexibility, modern & trendy, while also maintaining the strong VietinBank brand presence. After getting the approval from the BOD, we implemented the end-to-end system, integrating with Vietinbank’s core banking system while solving multiple challenges regarding security, performance, backup and complicated business logic.  The whole system is deployed on AWS cloud infrastructure, the first-ever banking project in Vietnam to do so.',
    images: [VietinImage1, VietinImage2],
    nextProject: 'Vietjet Air',
    nextLink: '/software/vietjet'
  }
]

export const PROJECT = {
  vietjet: [VIETJET_WEBSITE, VIETJET],
  maua: [MAUA],
  wmc: [WMC],
  kiman: [KIMAN],
  acb: [ACB],
  'hd-bank': [HDBANK],
  'mb-bank': [MBBANK],
  'vietin-bank': [VIETIN]
}
