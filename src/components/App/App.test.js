import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { HabitsProvider } from '../../contexts/HabitsContext'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <HabitsProvider>
        <App />
      </HabitsProvider>
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})