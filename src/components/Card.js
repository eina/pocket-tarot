import React, { useState } from 'react';

const Card = ({ name, shortName, orientation }) => {
  const [flip, setFlip] = useState(false);    
  
  const flipCard = () => setFlip(true);
//       .flip-container.flipped
  return (    
    <div className={!flip ? "flip-container" : "flip-container flipped"}>
      <div className="card-flipper">
        {/** card back **/}
        <div className="card card__back">
          
        </div>      

        {/** card front **/}
        <div className="card card__front">
          <img loading="lazy" className={`card__image card--${orientation}`} src={`https://f002.backblazeb2.com/file/tarot-spread-img/${shortName}.jpg`} alt={name}/>         
        </div>
      </div>                      
      
      {!flip ? 
        <button className="button--text" onClick={flipCard}>Flip</button>
        :
        <p className="card__name">{name}</p>
      }
    </div>
  )
}

export default Card;