import React from 'react'
import { LoginWrapper } from './styles'
import { Input } from '../../components/SearchInput/styles'

interface LoginProps {
  path: String
}

const Login: React.FC<LoginProps> = () => {
  return (
    <LoginWrapper>
      <Input type="email" placeholder="Enter Email" />
      <Input type="password" placeholder="Enter Password" />
    </LoginWrapper>
  )
}

export default Login
