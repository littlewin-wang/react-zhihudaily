import 'core-js/fn/object/assign'
import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'
import route from './route'

// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
    { route }
  </Provider>,
  document.getElementById('app')
)
