import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <>
      <div className='bg-gray-100'>
        < form method='GET' className='bg-white p-8 rounded shadow-md w-96' >
          <input type='email' name='email' placeholder='email' />
          <input type='password' name='password' placeholder='password' />
        </form >
        <Link to='signup'>I'm new here</Link>
      </div>

    </>
  )
}
