import { createStore, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'connected-react-router'
import reducers from '@/store/reducers'

const browserHistory = createBrowserHistory()

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'development') {
    return composeWithDevTools(
      applyMiddleware(routerMiddleware(browserHistory))
    )
  }

  return applyMiddleware(routerMiddleware(browserHistory))
}

const store = createStore(reducers, {}, getMiddleware())

export default store
