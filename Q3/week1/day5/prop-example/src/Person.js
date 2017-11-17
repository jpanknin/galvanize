import React from 'react';

const Person = ({person}) => {
  return (
    <div className="collection-item">
      This persons name is {person.name}
    </div>
  )
}

export default Person;
