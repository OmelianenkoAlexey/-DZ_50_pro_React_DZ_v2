import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NotFound from './pages/NotFound';
import Main from './components/Templates/Main/Main';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route index element={<Main />} path='/test' />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
