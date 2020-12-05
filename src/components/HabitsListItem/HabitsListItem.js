
import React, { Component } from 'react'
import { NiceDate } from '../Utils/Utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle, faCalendarCheck, faAward } from '@fortawesome/free-solid-svg-icons'
import './HabitsListItem.css'
export default class HabitsListItem extends Component {
  render() {
    const { habits, onComplete, onRemove } = this.props

    return (
      <div key={habits.id} className='HabitsListItem'>
        <div className='HabitsListItem__habits-stats'>
          <div className='HabitsListItem__name'>{habits.text}</div>
          <div className='HabitsListItem__due_date'>
            <FontAwesomeIcon icon={faCalendarCheck} />
            {NiceDate({ date: habits.due_date })}
          </div>
          <div className='HabitsListItem__reward'>
            <FontAwesomeIcon icon={faAward} />
            {habits.reward}
          </div>
          <div className='HabitsListItem__points'>
            <span className='HabitsListItem__points-label'>points</span>
            <span className='HabitsListItem__points-value'>{habits.points}</span>
          </div>
        </div>
        <div className='HabitsListItem__controls'>
          <FontAwesomeIcon
            icon={faCheckCircle}
            className='HabitsListItem__complete'
            title='Complete!'
            onClick={() => onComplete(habits.id, habits.reward, habits.points)}
          />
          <FontAwesomeIcon
            icon={faTimesCircle}
            className='HabitsListItem__remove'
            title='Remove..'
            onClick={() => onRemove(habits.id)} 
          />
        </div>
      </div>
    )
  }
}