import React from 'react';

const Link = ({ route }) => {
    return (
      <li className='px-4 py-2 hover:bg-teal-500'>
        <a href={route.path}>{route.name}</a>
      </li>
    );
};

export default Link;