import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import RootStore from './stores/rootStore'
import { storeContext } from './store.context'

const rootStore = new RootStore()

ReactDOM.render(
  <React.StrictMode>
    <storeContext.Provider value={rootStore}>
      <App store={rootStore} />
    </storeContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
