import React from 'react';

const Spread = ({ cards }) => {  
  
  console.log('what are these', cards)
    
  return cards.map(tarot => {
    const { name, name_short, desc, meaning_rev, meaning_up } = tarot;
    
    return (
      <div key={name_short}>
        <h3>{name}</h3>        
        <p>Description: {desc}</p>  
        <p>Reversed: {meaning_rev}</p>
        <p>Upright: {meaning_up}</p>
      </div>
    )
  })
}

export default Spread;