import React, { useState, useEffect } from 'react';
import List from './List';
import axios from 'axios';
import BoardHeader from './Board_Header';
import WritePost from './WritePost';
import { useNavigate } from 'react-router-dom';
import createIcon from '../../image/createIcon.png';
import './Board.css';

const Board = () => {
  const [postData, setPostData] = useState([]);

  const navigate = useNavigate();

  function fetchPostData() {
    fetch('/posts')
      .then((res) => res.json())
      .then((res) => setPostData(res))
      .catch((e) => console.log(e));
  }
  useEffect(fetchPostData, []);
  console.log(postData);

  return (
    <>
      <div className='boardContents'>
        <BoardHeader></BoardHeader>
        {/* <List items={testList} /> */}
        <List items={postData} />
      </div>
      <img
        src={createIcon}
        height={60}
        width={60}
        style={{ position: 'fixed', bottom: 70, right: 20 }}
        onClick={() => navigate('/WritePost')}
      />
    </>
  );
};

export default Board;
