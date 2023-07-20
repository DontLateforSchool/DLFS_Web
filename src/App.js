import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Bus/Home';
import Day from './pages/Day/Day';
import Board from './pages/Board/Board';
import BottomNav from './pages/bottomNav/BottomNav';

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
