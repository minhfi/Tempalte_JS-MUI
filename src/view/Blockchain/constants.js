import GameFI from '@/static/image/blockchain/blockchain-game-fi.png'
import Academy from '@/static/image/blockchain/blockchain-academy.png'
import Lab from '@/static/image/blockchain/blockchain-lab.png'
import BlockTalk from '@/static/image/blockchain/blockchain-topic-blocktalk.png'
import Blockathons from '@/static/image/blockchain/blockchain-topic-blockathons.png'
import RD from '@/static/image/blockchain/blockchain-topic-rd.png'

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
