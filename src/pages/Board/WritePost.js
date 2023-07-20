import React from 'react';
import WritePostHeader from './WritePost_Header';
import './Board.css';

function WritePost() {
  return (
    <>
      <WritePostHeader />
      <div className='postContents'>
        <div>
          <span>제목: </span>
          <input></input>
        </div>
        <div>
          <span>내용: </span>
          <textarea></textarea>
          <p>d</p>
        </div>
      </div>
    </>
  );
}

export default WritePost;
