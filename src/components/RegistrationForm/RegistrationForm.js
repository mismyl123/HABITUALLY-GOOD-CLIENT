import React, { Component } from 'react'
import { Button, Input, Required } from '../Utils/Utils'

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { first_name, username, password } = ev.target

    console.log('registration form submitted')
    console.log({ first_name, username, password })

    first_name.value = ''
    username.value = ''
    password.value = ''
    this.props.onRegistrationSuccess()
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='RegistrationForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='first_name'>
          <label htmlFor='RegistrationForm__first_name'>
            First name <Required />
          </label>
          <Input
            name='first_name'
            type='text'
            required
            id='RegistrationForm__first_name'>
          </Input>
        </div>
        <div className='username'>
          <label htmlFor='RegistrationForm__username'>
            User name <Required />
          </label>
          <Input
            name='username'
            type='text'
            required
            id='RegistrationForm__username'>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='RegistrationForm__password'>
            Password <Required />
          </label>
          <Input
            name='password'
            type='password'
            required
            id='RegistrationForm__password'>
          </Input>
        </div>
        
        <Button type='submit'>
          Register
        </Button>
      </form>
    )
  }
}