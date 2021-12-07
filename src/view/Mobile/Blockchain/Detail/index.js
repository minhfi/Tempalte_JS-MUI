import React, { useMemo } from 'react'
import { useParams } from 'react-router'
import ButtonClose from '@/components/Buttons/ButtonClose'
import ButtonMouseScroll from '@/components/Buttons/ButtonMouseScroll'
import GameFI from './GameFI'
import Academy from './Academy'
import Lab from './Lab'

const index = () => {
  const { type } = useParams()
  const hidenScroll = type === 'game-fi'

  const LAYOUT = useMemo(() => {
    switch (type) {
      case 'game-fi':
        return <GameFI/>
      case 'academy':
        return <Academy/>
      case 'lab':
        return <Lab/>
      default: return <div/>
    }
  }, [type])

  return (
    <div className={`blockchain-detail ${hidenScroll && 'hiden'}`}>
      <div className="blockchain-detail__close">
        <ButtonClose path="/blockchain"/>
      </div>

      {LAYOUT}

      {type !== 'game-fi' && <ButtonMouseScroll/>}
    </div>
  )
}

export default index
