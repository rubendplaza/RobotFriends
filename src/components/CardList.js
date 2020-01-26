import React from 'react';
import Card from './Card';
import WikiLink from './WikiLink';

const CardList = ({ robots }) => {
  return (
    <div className='pa3 ma3'>
      {
        robots.map((user, i) => {
          return (
            <WikiLink nameLink={robots[i].name} robots={robots}>
              <Card
                key={robots[i].id}
                id={robots[i].id}
                name={robots[i].name}
                username={robots[i].username}
                source={robots[i].source}
              />
            </WikiLink>
          );
        })
      }
    </div>
  );
}

export default CardList;