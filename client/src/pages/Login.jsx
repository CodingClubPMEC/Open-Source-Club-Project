import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
      <form className=''>
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
      </form>
      <Link to="signup">I already have an account</Link>
    </>
  )
}
