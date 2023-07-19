import React, { useEffect, useState } from 'react';

import '../css/Home.css';
import Header from './Header';
import Bus from './Bus';

const Home = () => {
  return (
    <div className='home'>
      <Header></Header>
      <div className='contents'>
        <Bus></Bus>
      </div>
    </div>
  );
};

export default Home;
