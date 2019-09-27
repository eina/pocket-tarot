import React from 'react';

const Card = ({ name, shortName, orientation }) => {
  return (
    <figure className="card">          
      <img className={`card__image card--${orientation}`} src={`https://f002.backblazeb2.com/file/tarot-spread-img/${shortName}.jpg`} alt={name}/>            
      <figcaption className="card__caption">{name}</figcaption>
    </figure>
  )
}

export default Card;