import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {

  const styles = {
    field: 'w-full px-3 py-2 border rounded-xl focus:outline-none focus:border-blue-500',
    button: 'w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-xl hover:bg-blue-600 focus:outline-none focus:bg-blue-600'
  }

  return (
    <div className='min-h-screen bg-gray-200 flex items-center justify-center'>
      <div className='bg-white p-8 rounded-3xl shadow-md w-96'>
        <h1 className='text-2xl font-semibold mb-4'>Log in</h1>
        <form>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700 font-medium mb-1'>Email Address</label>
            <input type='email' id='email' name='email' className={styles.field} placeholder='Enter your email' required />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block text-gray-700 font-medium mb-1'>Password</label>
            <input type='password' id='password' name='password' className={styles.field} placeholder='Enter your password' required />
          </div>
          <button type='submit' className={styles.button}>Login</button>
        </form>
        <p className='text-gray-700 text-sm mt-2'>Don't have an account? <Link to='/signup' className='text-blue-500 font-semibold'>Sign up here</Link></p>
        <p className='text-gray-700 text-sm mt-2'>Just wanna checkout. Click here <Link to='/signup' className='text-blue-500 font-semibold'>Guest Login</Link></p>
      </div>
    </div>
  );
}

