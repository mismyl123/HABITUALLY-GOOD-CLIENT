
import React from 'react'
import ReactDOM from 'react-dom'
import HabitsList from './HabitsList'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<HabitsList />,div)
  ReactDOM.unmountComponentAtNode(div)
})