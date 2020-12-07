import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'
import LoginForm from '../../components/LoginForm/LoginForm'
import AuthContext from '../../contexts/AuthContext'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { }
    }
  }

  handleLoginSuccess = () => {
    const { history } = this.props
    const destination = `/dash`
    history.push(destination)
  }

  render() {
    return (
      <AuthContext.Consumer>
        {(auth) => (
          <Section className='LoginPage'>
            <h2>Login</h2>
            <LoginForm onLoginSuccess={(token) => this.handleLoginSuccess(auth, token)} />
          </Section>
        )}
      </AuthContext.Consumer>
    );
  }
}