// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components to renber everywhere
//import Navbar from './components/ui/navbar';

// Pages
import Home from './pages/Home';
import Auth from './pages/Auth';
import ForgotPasswordForm from './components/auth/forotPasswordForm';
export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/forgot-password' element={<ForgotPasswordForm />} />
    </Routes>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
