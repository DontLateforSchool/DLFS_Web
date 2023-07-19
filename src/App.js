import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Day from './pages/Day';
import Board from './pages/Board';
import BottomNav from './bottomNav/BottomNav';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/day' element={<Day />}></Route>
        <Route path='/board' element={<Board />}></Route>
      </Routes>
      <BottomNav />
    </div>
  );
}

export default App;
