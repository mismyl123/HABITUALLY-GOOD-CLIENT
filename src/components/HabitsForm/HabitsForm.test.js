
import React from 'react'
import ReactDOM from 'react-dom'
import HabitsForm from './HabitsForm'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<HabitsForm />,div)
  ReactDOM.unmountComponentAtNode(div)
})