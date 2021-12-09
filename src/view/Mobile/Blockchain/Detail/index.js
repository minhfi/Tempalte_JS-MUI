import React, { useMemo } from 'react'
import { useParams } from 'react-router'
import ButtonClose from '@/components/Buttons/ButtonClose'
import GameFI from './GameFI'
import Academy from './Academy'
import Lab from './Lab'

const index = () => {
  const { type } = useParams()

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
    <div className="mobile-blockchain__detail">
      <div className="mobile-blockchain__detail--close">
        <ButtonClose type="mobile" path="/blockchain"/>
      </div>

      {LAYOUT}
    </div>
  )
}

export default index
