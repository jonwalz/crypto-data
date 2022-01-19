import React from 'react'
import { LoginWrapper } from './styles'
import { Input } from './styles'

interface LoginProps {
  path: String
}

const Login: React.FC<LoginProps> = () => {
  //todo: create inputs and form validation (custom hook?)
  return (
    <LoginWrapper>
      <Input type="email" placeholder="Enter Email" />
      <Input type="password" placeholder="Enter Password" />
    </LoginWrapper>
  )
}

export default Login
