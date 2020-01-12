import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div className='pa3 ma3'>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={robots[i].id}
              id={robots[i].id}
              name={robots[i].name}
              username={robots[i].username}
              source={robots[i].source}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;