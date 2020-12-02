import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { HabitsProvider } from './contexts/HabitsContext'
import App from './components/App/App'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <HabitsProvider>
      <App />
    </HabitsProvider>
  </BrowserRouter>,
  document.getElementById('root')
)