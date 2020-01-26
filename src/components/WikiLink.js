import React from 'react';

const WikiLink = (props) => {
  const wikipedia = 'https://en.wikipedia.org/wiki/Mr._Robot';
  return(
  <a href={wikipedia}>{props.children}</a>
  );
}

export default WikiLink;