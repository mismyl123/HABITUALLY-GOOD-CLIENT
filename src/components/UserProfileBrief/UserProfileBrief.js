import React, { Component } from 'react'
import { NiceDate } from '../Utils/Utils'
import productivity from '../../images/productivity.png'
import './UserProfileBrief.css'

export default class UserProfileBrief extends Component {
  render() {
    const { user } = this.props

    return (
      <div className="user__profile-brief">
        <img className='user__points-gauge' src={ productivity } alt='productivity'/>
        <div className='user__stats'>
          <h3 className="user__username">{user.username}</h3>
          <h3 className='user__points'>points: {user.points} / {user.points_to_next_level}</h3>
          <h3 className="user__badge">Level: {user.level}</h3>
          <h3 className="user_member-since">Since: {NiceDate({date: user.date_joined, format: 'MMM YYYY'})}</h3>
        </div>
      </div>
    )
  }
}