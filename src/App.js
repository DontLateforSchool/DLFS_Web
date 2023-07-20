import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Bus/Home';
import Day from './pages/Day/Day';
import Board from './pages/Board/Board';
import BottomNav from './pages/bottomNav/BottomNav';
import WritePost from './pages/Board/WritePost';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/day' element={<Day />}></Route>
        <Route path='/board' element={<Board />}></Route>
        <Route path='/WritePost' element={<WritePost />} />
      </Routes>
      <BottomNav />
    </div>
  );
}

export default App;
