// Modules
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './components/styles/tailwind.css'
// Components to renber everywhere
import Navbar from './components/ui/navbar'

// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ForgotPasswordForm from './components/auth/forotPasswordForm';

export default function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Navbar />} />
				<Route index element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/forgot-password' element={<ForgotPasswordForm />} />
			</Routes>
			<Navbar />
		</>
	);
}

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);
