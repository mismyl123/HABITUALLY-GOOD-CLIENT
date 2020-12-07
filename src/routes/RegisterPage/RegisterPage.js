import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import AuthContext from '../../contexts/AuthContext'

export default class RegisterPage extends Component {
  static defaultProps = {
    history: {
      push: () => { }
    }
  }

  handleRegisterSuccess = user => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <AuthContext.Consumer>
        {(auth) => (
          <Section className='RegisterPage'>
            <h2>Register</h2>
            <RegisterForm onRegisterSuccess={(token) => this.handleRegisterSuccess(auth, token)} />
          </Section>
        )}
      </AuthContext.Consumer>
    );
  }
}