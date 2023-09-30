import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/global.ts'
import { RoutesList } from './routes/RoutesList.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle/>
    <RoutesList />
  </React.StrictMode>,
)
