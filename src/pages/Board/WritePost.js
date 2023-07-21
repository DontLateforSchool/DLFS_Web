import React, { useState } from 'react';
import WritePostHeader from './WritePost_Header';
import './Board.css';
import { useNavigate } from 'react-router-dom';

function WritePost() {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const navigate = useNavigate();
  const formData = new FormData();
  function uploadData() {
    fetch('/posts/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        contents: contents,
      }),
    })
      .then((res) => navigate(-1))
      .catch((e) => console.log(e));
  }
  // function deleteData() {
  //   fetch('/posts/5', {
  //     method: 'DELETE',
  //   })
  //     .then((res) => console.log(res))
  //     .catch((e) => console.log(e));
  // }
  return (
    <>
      <WritePostHeader />
      <div className='postContents'>
        <div>
          <input
            placeholder='제목'
            style={{
              width: '93%',
              height: 30,
              marginLeft: 1,
              fontSize: 17,
              paddingLeft: 10,
              paddingRight: 10,
            }}
            value={title}
            onChange={(v) => setTitle(v.target.value)}
          ></input>
        </div>
        <br />
        <textarea
          placeholder='내용'
          style={{
            width: '93.1%',
            height: 520,
            marginLeft: 1,
            fontSize: 17,
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
          }}
          value={contents}
          onChange={(v) => setContents(v.target.value)}
        ></textarea>
        <br />
        <br />
        <div style={{ textAlign: 'right' }}>
          <button
            style={{
              backgroundColor: 'rgb(114, 114, 114)',
              color: 'white',
              borderColor: 'transparent',
              width: '70px',
              height: '30px',
              borderRadius: '3px',
              fontWeight: 'bold',
            }}
            onClick={() => uploadData()}
          >
            등록
          </button>
        </div>
      </div>
    </>
  );
}

export default WritePost;
