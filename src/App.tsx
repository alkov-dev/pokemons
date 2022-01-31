import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import PokePage from './pages/PokePage';

function App() {
  return (
    <BrowserRouter>
        <div>
        <Header />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/pokemon/:id'} element={<PokePage />} />
        </Routes>
        </div>
      </BrowserRouter>


  );
}

export default App;
