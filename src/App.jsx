import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NotFound from './pages/NotFound';
import NextPage from './components/Templates/NextPage';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/test/*' element={<NextPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
