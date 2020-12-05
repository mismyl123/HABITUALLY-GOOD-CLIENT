import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { DashboardProvider } from '../../contexts/DashboardContext'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <DashboardProvider>
        <App />
      </DashboardProvider>
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})