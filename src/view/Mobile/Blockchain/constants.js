import EnterpriseSolutionIcon from '@/static/image/blockchain/lab/blockchain-enterise-solution.png'
import BlockchainSolutionIcon from '@/static/image/blockchain/lab/blockchain-research.png'
import BlockchainServiceIcon from '@/static/image/blockchain/lab/blockchain-service.png'
import VerifiableRNGIcon from '@/static/image/blockchain/lab/blockchain-veriable-rng.png'
import Blockathons from '@/static/image/blockchain/blockchain-topic-blockathons.png'
import BlockTalk from '@/static/image/blockchain/blockchain-topic-blocktalk.png'
import GameIcon from '@/static/image/blockchain/lab/blockchain-gaming.png'
import Academy from '@/static/image/blockchain/blockchain-academy.png'
import GameFI from '@/static/image/blockchain/blockchain-game-fi.png'
import RD from '@/static/image/blockchain/blockchain-topic-rd.png'
import Lab from '@/static/image/blockchain/blockchain-lab.png'

export const BLOCKCHAINS = [
  {
    _id: 'game-fi',
    image: GameFI,
    name: 'GameFI',
    path: '/blockchain/game-fi',
    description: 'GameFi is one of the hottest new trends to emerge from the crypto industry, combining decentralized finance (DeFi) and non-fungible tokens (NFTs) with blockchain-based online games.'
  },
  {
    _id: 'academy',
    image: Academy,
    name: 'Academy',
    path: '/blockchain/academy',
    description: 'At our company, we have always believed in the value of teaching and cultivating people. Blockchain is the foundation technology of the next chapter for the Internet. Hence, we educate talents for the future.'
  },
  {
    _id: 'lab',
    image: Lab,
    name: 'Lab',
    path: '/blockchain/lab',
    description: 'Blockchain technology is capable of transforming the way the world does business. With our deep expertise and experience in Blockchain, we provide multiple services with different strategic focuses.'
  }
]

export const ACADEMY_TOPIC = [
  {
    _id: 1,
    image: BlockTalk,
    title: 'Block-Talk',
    description: 'Invited speakers, KOLs, influencers.  Sharing new blockchain technologies, insights of hot trending topics.'
  },
  {
    _id: 2,
    image: Blockathons,
    title: 'Blockathons',
    description: 'Organize oriented contests to find talents and good solutions on blockchain.'
  },
  {
    _id: 3,
    image: RD,
    title: 'R&D',
    description: 'Research on in-depth technologies that are the foundation for blockchain technology such as: cryptography, game-theory, coding theory, network, security.'
  }

]

export const LAB_BLOCK = [
  {
    icon: GameIcon,
    title: 'Game studio',
    description: 'Catching up with the hot trend of making gamefi on the market. We have the full team to help you create a new game or turn an existing game into a full-featured gamefi from Tokenize to NFT and NFT marketplace. Our team includes:',
    list: [
      'Team of blockchain experts',
      'Team of expert game producers (plot, game balance, financial balance in the game)',
      'Team of game developers (Unity)',
      'Art Studio'
    ]
  },
  {
    icon: EnterpriseSolutionIcon,
    title: 'Enterprise solution',
    description: 'We consult and implement highly complex products using blockchain technology such as Wallet, Tokens implementation, Dex.'
  },
  {
    icon: BlockchainSolutionIcon,
    title: 'Blockchain solution audit',
    description: "Security is an extremely important issue in blockchain because it is directly related to user's money. Therefore, every project on the blockchain needs to be thoroughly audited. We provide a full package of auditing services including:",
    list: [
      'Smart contract audit',
      'Smart contract review and optimization',
      'Protocol and security audit',
      'Art Studio'
    ]
  },
  {
    icon: BlockchainServiceIcon,
    title: 'Blockchain node and Staking pool as a service',
    description: 'We have had in-depth experience in developing and managing staking pool nodes in various project protocols.\n We also offer Node as a Service development for institutions who want to create their own project staking pools. Through our expert development team, institutions can focus on their business strategy and growth, while leaving the technical development and maintenance of the staking pool nodes to us.'
  },
  {
    icon: VerifiableRNGIcon,
    title: 'Verifiable RNG',
    description: 'The random number generator system is one of the core components in many applications, especially those related to cryptography. It is essential to simulate true randomness and to verify a value whether it is exactly generated from a fair random system. It helps all systems operate fairly, eliminating fraud. We are proud to be the pioneers in using the power of blockchain technology to provide verifiable RNG service.'
  }
]
