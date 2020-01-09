import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div className='cf pa5'>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={robots[i].id}
              id={robots[i].id}
              name={robots[i].name}
              username={robots[i].username}
              email={robots[i].email}
              source={robots[i].source}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;