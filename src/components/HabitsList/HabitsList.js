import React, { Component } from 'react'
import HabitsListItem from '../HabitsListItem/HabitsListItem'
import './HabitsList.css'

export default class HabitsList extends Component {
  renderHabits() {
    const { habitsList = [], onComplete, onRemove } = this.props

    if(habitsList.length === 0) {
      return (
        <div className='habitslist-no-habits'>
          <h3>What to do today???:)</h3>
        </div>
      )
    }

    return habitsList.map(habits => 
      <HabitsListItem
        key={habits.id}
        habits={habits}
        onComplete={onComplete}
        onRemove={onRemove} 
      />
    )
  }
  
  render() {
    return (
      <div className="habitslist-inner">
        <h2 className='habitslist-title'>Habits</h2>
        {this.renderHabits()}
      </div>
    )
  }
}