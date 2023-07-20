import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Board.css';
import backArrow from '../../image/backArrow.png';

const WritePostHeader = () => {
  const navigate = useNavigate();

  return (
    <div className='boardHead'>
      <p>{'\u00A0'}</p>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <img
          src={backArrow}
          height={17}
          width={10}
          style={{ marginTop: 8 }}
          onClick={() => navigate(-1)}
        />
        <h2 style={{ marginLeft: 20, marginTop: 0 }}>새 글 작성</h2>
      </div>
    </div>
  );
};

export default WritePostHeader;
