import React from 'react';

const SpreadInfo = ({ type }) => {
  if(type == 1) {
    return (
      <div>
        <blockquote>
          <ul>
            <li>Energy of the day</li>
            <li>Tarot gratitude</li>
            <li>What can I embody today?</li>
          </ul>
          
          <cite><a href="http://www.kateyflowers.com/blog/tarot-spreads-for-beginners" alt="Katey Flowers: Tarot Spreads for Beginners">Katey Flowers: Tarot Spreads for Beginners</a></cite>
        </blockquote>
      </div>    
    )
  }
  
  if(type == 2) {
    return (
      <div>
        <blockquote>
          <ul>
            <li>Release / Receive</li>
            <li>Doing well / Do better</li>
            <li>Do this / Don't do this</li>
          </ul>
          
          <cite><a href="http://www.kateyflowers.com/blog/tarot-spreads-for-beginners" alt="Katey Flowers: Tarot Spreads for Beginners">Katey Flowers: Tarot Spreads for Beginners</a></cite>
        </blockquote>
      </div>
    )
  }
  
  if(type == 3) {
    return (
      <div>
        <blockquote>
          <p>As you can imagine, this layout is good at suggesting some sort of linear path, sequence of events, cause and effect, or a way of getting from point a to point b.</p>
          <ul>            
              <li>Past, Present, Future</li>
              <li>You, Your Path, Your Potential</li>
              <li>You, Relationship, Partner</li>
              <li>Situation, Action, Outcome</li>
              <li>Idea, Process, Aspiration</li>            
          </ul>
          
          <cite><a href="https://labyrinthos.co/blogs/learn-tarot-with-labyrinthos-academy/3-card-tarot-spreads-simple-tarot-spreads-organized-by-layout" alt="Labyrinthos.co: 3 Card Tarot Spreads">Labyrinthos.co</a></cite>
        </blockquote>
      </div>
    )
  }
}

export default SpreadInfo; 