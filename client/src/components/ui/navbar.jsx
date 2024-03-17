import { Outlet, Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav>
        <menu>
          <Link to='/'><img src='../../public/assets/cdd-logo.png' /></Link>
          <Link to='/home'>Home</Link>
          <Link to='/auth'>Auth</Link>
        </menu>
        <Outlet />
      </nav >
    </>
  )
}
