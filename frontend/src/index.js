import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './Rotas'
import { GlobalStateProvider } from './GlobalState'



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GlobalStateProvider>
      <BrowserRouter>
        <Rotas/>
      </BrowserRouter>
    </GlobalStateProvider>
  </React.StrictMode>
)


