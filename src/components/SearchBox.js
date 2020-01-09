import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='input-reset ba b--black-20 pa2 mb2 db w-25 center'
        type='search'
        placeholder='Find Friends'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;