import React, { useEffect, useState } from 'react';

import './Home.css';
import BusHeader from './Bus_Header';
import Bus from './Bus';

const Home = () => {
  return (
    <div className='home'>
      <BusHeader></BusHeader>
      <div className='contents'>
        <Bus></Bus>
      </div>
    </div>
  );
};

export default Home;
