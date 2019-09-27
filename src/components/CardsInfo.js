import React from 'react';

const CardsInfo = ({ cards }) => {  
            
  return (        
    <div className="cards-info">
      {cards.map(tarot => {
          const { name, name_short, desc, meaning_rev, meaning_up } = tarot;          

          return (
            <div key={`${name_short}-description`}>
              <h3>{name}</h3>              
              <p><span className="text-underline">Upright</span>: {meaning_up}</p>
              <p><span className="text-underline">Reversed</span>: {meaning_rev}</p>
              <p>Read more about {name} on <a href={`https://www.sacred-texts.com/tarot/pkt/pkt${name_short}.htm`} target="_blank">The Pictorial Key to the Tarot by A.E. Waite</a></p>
            </div>
          )
        })}                  
    </div>  
  )
}

export default CardsInfo;