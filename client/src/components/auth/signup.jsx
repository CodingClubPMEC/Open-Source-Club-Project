import React from 'react'

export default function signup() {
  return (
    <form>
      <input type="text" name="name" placeholder="name" />
      <input type="text" name="username" placeholder="username" />
      <input type="date" name="dob" />
      <input type="email" name="email" placeholder="email" />
      <input type="number" name="phoneNumber" placeholder="phoneNumber" />
      <input type="password" name="password" placeholder="password" />
      <input type="password" name="confirmPassword" placeholder="confirmPassword" />
    </form>
  )
}
