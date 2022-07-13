import * as type from '../types'

const initialState = {
  status: false,
  skeleton: false,
  table: false,
  optionSelect: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.LOADING:
      return { ...state, ...action.payload }

    default:
      return state
  }
}

export default reducer
