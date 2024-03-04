import React, { useState } from 'react'
import Login from '../components/auth/login'
import Signup from '../components/auth/signup'

export default function NewMembers() {
  const [isLoggedin, setIsLoggedin] = useState(true)
  const toggleAuthState = () => {
    setIsLoggedin(prevState => !prevState)
  }
  return (
    <>
      {isLoggedin ? <Login /> : <Signup />}
    </>
  )
}
