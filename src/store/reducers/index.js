/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import { createBrowserHistory } from 'history'

/* import main reducer load sync */
import auth from '@/store/reducers/auth'
import theme from '@/store/reducers/theme'
import loading from '@/store/reducers/loading'

const initialState = {
  loading: false
}

const root = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: action.value }
    default:
      return state
  }
}

const history = createBrowserHistory()
const reducers = combineReducers({
  router: connectRouter(history),
  root,
  auth,
  theme,
  loading
})

export default reducers
