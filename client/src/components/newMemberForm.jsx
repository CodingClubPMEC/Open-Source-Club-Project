import React from "react"

export default function newMemberForm() {
  return (
    <>
      <form>
        <input type='text' name='name' placeholder='Name'></input>
        <input type='number' name='number' placeholder='Mobile Number'></input>
        <input type='email' name='email'></input>
      </form>
    </>
  )
}
