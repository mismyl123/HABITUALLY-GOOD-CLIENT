import React from 'react'
import ReactDOM from 'react-dom'
import PointsRadial from './PointsRadial'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<PointsRadial />,div)
  ReactDOM.unmountComponentAtNode(div)
})