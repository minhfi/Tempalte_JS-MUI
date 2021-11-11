import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import registerServiceWorker from './registerServiceWorker'
import store from '@/store'

// import multiple languages
import '@/i18n' // uncomment to use

// import CSS, scss
import '@/style'
import { Provider } from 'react-redux'

// load firebase

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

registerServiceWorker()
