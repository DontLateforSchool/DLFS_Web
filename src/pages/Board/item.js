import React from 'react';

function Item({ item }) {
  return (
    <div className='item'>
      {/* <span className='id'>{item.id}</span> */}
      <span className='title'>{item.title}</span>
      <span className='contents'>{item.contents}</span>
      {/* <span>{item.createdAt}</span>
      <span>{item.updatedAt}</span> */}
    </div>
  );
}

export default Item;
