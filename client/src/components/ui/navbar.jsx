import { Outlet, Link } from 'react-router-dom'

export default function Navbar() {
	return (
		<>
			<nav>
				<ul>
					<li><Link to='/home'>Home</Link></li>
					<li><Link to='/trending'>Trending</Link></li>
					<li><Link to='/search'>Search</Link></li>
					<li><Link to='/club'>Club</Link></li>
					<li><Link to='/profile'>Profile</Link></li>
					<li><Link to='/feedback'>Feedback</Link></li>
				</ul>
				<Outlet />
			</nav >
		</>
	)
}
