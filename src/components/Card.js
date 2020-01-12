import React from 'react';
import Image from './Image';
import './Card.css';

const Card = ({ name, username }) => {
  return (
    <div className='grow card pa3 ma3 br3 tc dib shadow-3'>
      <Image name={name} />
      <div>
        <h2>{name}</h2>
        <p>{username}</p>
      </div>
    </div>
  );
}

export default Card;