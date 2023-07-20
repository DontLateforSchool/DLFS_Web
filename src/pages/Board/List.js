import react from 'react';
import Item from './item';

function List({ items }) {
  return (
    <div>
      {items.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
}

export default List;
