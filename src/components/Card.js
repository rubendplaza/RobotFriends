import React from 'react';
import Image from './Image';
import './Card.css';

const Card = ({ name, email, username }) => {
  return (
    <div className='fl w-50 w-25-m w-20-l pa3 dim card'>
      <Image name={name} />
      <div>
        <h2>{name}</h2>
        <p>{username}</p>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;