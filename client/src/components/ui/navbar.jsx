import { Outlet, Link } from 'react-router-dom'

export default function Navbar() {
	//TODO: Add icons instead of texts for links and make it look like buttons.
	//TODO: Style the navbar to feel like ios dock.
	return (
		<>
			<nav className='flex justify-center'>
				<ul className='backdrop-blur-xl rounded-l w-11/12 flex flex-row justify-around items-center'>
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
