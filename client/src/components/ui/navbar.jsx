import { Outlet, Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav>
                <h1> This is navbar</h1>
                <ul>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/auth'>Auth</Link></li>
                </ul>
                <Outlet />
            </nav >
        </>
    )
}
