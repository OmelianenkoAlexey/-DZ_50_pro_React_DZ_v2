import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import GridTemplate from './components/Templates/GridTemplate';
import NotFound from './pages/NotFound';
import Main from './components/Templates/Main/Main';
import NextPage from './components/Templates/NextPage';

export default function App() {
  return (
    <div className="App">
      <GridTemplate>
        <BrowserRouter>
          <Routes>
            <Route index element={<Main />} path='/test' />
            <Route path='*' element={<NotFound />} />
            <Route path='/test/*' element={<NextPage />} />
          </Routes>
        </BrowserRouter>
      </GridTemplate>
    </div>
  );
}
