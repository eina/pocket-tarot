import React from 'react';
import { _shuffle } from '../data/cardTest';
import Card from './Card';

const Spread = ({ cards }) => {  
            
  return (    
      <div className="card-grid">
        {cards.map(tarot => {
          const { name, name_short, desc, meaning_rev, meaning_up } = tarot;
          const cardOrientation = _shuffle(['upright', 'reversed']);          

          return <Card 
                   name={name}
                   shortName={name_short}
                   key={name_short} 
                   orientation={cardOrientation[0]} 
                />
        })}                  
    </div>        
  )
}

export default Spread;