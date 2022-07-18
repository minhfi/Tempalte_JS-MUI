import { THEME } from '@/constants'
import * as type from '../types'

const initialState = {
  mode: THEME.LIGHT
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.SET_THEME:
      return { ...state, mode: action.payload }

    default:
      return state
  }
}

export default reducer
