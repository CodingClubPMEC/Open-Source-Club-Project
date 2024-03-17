import { Link } from 'react-router-dom'

export default function signup() {
const styles = {
    heading:'text-2xl font-semibold mb-4',
    field: 'w-full px-3 py-2 border rounded-xl focus:outline-none focus:border-blue-500',
    button: 'w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-xl hover:bg-blue-600 focus:outline-none focus:bg-blue-600',
    label: 'block text-gray-700 font-medium mb-1'
  }
  return (
    <> 
      <div className='min-h-screen bg-gray-200 flex items-center justify-center'>
      <div className='bg-white p-8 rounded-3xl shadow-md w-96'>
        <h1 className='text-2xl font-semibold mb-4'>Signup</h1>
        <form>
          <div className='mb-4'>
            <label htmlFor='text' className={styles.label}>Full Name</label>
            <input type="text" name="name" placeholder="Enter your name" className={styles.field} />
          </div>
          <div className='mb-4'>
            <label htmlFor='text' className={styles.label}>Username</label>
            <input type="text" name="username" placeholder="Enter your username" className={styles.field} />
          </div>
          <div className='mb-4'>
            <label htmlFor='date' className={styles.label}>Date Of Birth</label>
            <input type="date" name="dob" className={styles.field} />
          </div>
            <div className='mb-4'>
            <label htmlFor='email' className={styles.label}>Email Address</label>
            <input type="email" name="email" placeholder="Enter your email" className={styles.field} />
          </div>
          <div className='mb-4'>
            <label htmlFor='number' className={styles.label}>Phone Number</label>
            <input type="number" name="phonenumber" placeholder="Enter your phone number" className={styles.field} />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className={styles.label}>Password</label>
            <input type="password" name="newpassword" placeholder="Enter your password" className={styles.field} />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className={styles.label}>Confirm Password</label>
            <input type="password" name="confirmpassword" placeholder="Enter your password again" className={styles.field} />
          </div>
          <button type='submit' className={styles.button}>Signup</button>
        </form>
        <p className='text-gray-700 text-sm mt-2'>Already have an account <Link to='/login' className='text-blue-500 font-semibold'>Login here</Link></p>
      </div>
    </div> 
    </>
  )
}
