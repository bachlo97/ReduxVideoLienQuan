import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//Setup redux
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import { rootReducer } from './redux/rootReducer.jsx'

const store =createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__?.())
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <App/>
  </Provider>
)
