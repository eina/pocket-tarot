import React, { Component } from 'react';
import { _cards, _shuffle } from '../data/cardTest.js';
import axios from 'axios';

import Spread from './Spread';
import CardsInfo from './CardsInfo';

class SpreadPicker extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      cards: null,
      hasSpread: false,
      spreadType: ''
    }
    
    this.fetchDeck = this.fetchDeck.bind(this);
    this.chooseSpread = this.chooseSpread.bind(this);
    this.refreshSpread = this.refreshSpread.bind(this);
  }
  
  chooseSpread(e) {        
    const cardAmount = e.target.value;
    // const shuffledCards = _shuffle(_cards); // for dev/offline testing only
    const spreadRequest = `https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=` + cardAmount    
    
    /* FOR PRODUCTION */
     this.fetchDeck(spreadRequest).then(cards => this.setState({ 
       cards: cards.data.cards,
       hasSpread: true,
       spreadType: cardAmount
     }));
    
    // /* FOR DEV */    
    // this.setState({ 
    //   hasSpread: true,  
    //   cards: shuffledCards.slice(0, cardAmount),
    //   spreadType: cardAmount
    // })        
  }
  
  refreshSpread(){
    this.setState({ 
      hasSpread: false,
      cards: null,
      spreadType: ''
    })
  }
      
  async fetchDeck(url){
    try {            
      const cards = await axios.get(`https://cors-anywhere.herokuapp.com/${url}`);
      return _shuffle(cards);
    }
    catch(error) {
      console.log(error);
    }
  }
    
  
  render() {  
    console.log('cards are you here', this.state.cards);
    const { cards, spreadType } = this.state;
    
    return (
      <div>
        
        { 
          !this.state.hasSpread && !cards ? 
          (<div className="spread-selector">
            <button name="one-card" value="1" onClick={e => this.chooseSpread(e)}>One Card</button>
            <button name="two-card" value="2" onClick={e => this.chooseSpread(e)}>Two Cards</button>
            <button name="three-card" value="3" onClick={e => this.chooseSpread(e)}>Three Card</button>
          </div>)
          :
          (
            <React.Fragment>            
              <div className="spread-selector"><button className="button--text"onClick={this.refreshSpread}>Choose a different spread?</button></div>

              <Spread cards={cards} cardAmt={spreadType} />

              <h2>✨ {spreadType} Card Spread ✨</h2>            

              <CardsInfo cards={cards} />

            </React.Fragment>
          )
        }
                
      </div>
    );
  }  
}

export default SpreadPicker;