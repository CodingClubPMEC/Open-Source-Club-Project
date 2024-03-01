// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import Navbar from './components/navbar';
// Pages
import Home from './pages/Home';
import NewMembers from './pages/NewMembers';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addMembers' element={<NewMembers />} />
      </Routes>
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
