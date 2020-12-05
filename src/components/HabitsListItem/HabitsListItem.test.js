import React from 'react'
import ReactDOM from 'react-dom'
import HabitsListItem from './HabitsListItem'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <HabitsListItem
    habits={{ 
        id: 0, 
        text: 'Test Text', 
        due_date: '2020',
        reward: 'Test Reward',
        points: 100        
      }}
    />,div)
  ReactDOM.unmountComponentAtNode(div)
})