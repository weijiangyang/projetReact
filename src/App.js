import { Component } from 'react';
import Card from './Card.js'
import './App.css';
import GuessCount from './GuessCount.js';

class App extends Component {
  won = new Date().getSeconds()% 2 === 0;
  handleCardClick(card){
    console.log(`${card} clicked`);
  }
  render() {
    return (
    <div className='memory'>
      <GuessCount guesses ={33}/>
      <Card card='😀' feedback = 'justMismatched' onClicked = {this.handleCardClick}/>        
      <Card card ='🌺' feedback ='hidden' onClicked = {this.handleCardClick}/>
      <Card card ='🥰' feedback ='justMatched' onClicked = {this.handleCardClick}/>
      <Card card ='🌈' feedback ='hidden' onClicked = {this.handleCardClick}/>
      <Card card ='😛' feedback ='justMismatched' onClicked = {this.handleCardClick}/>
      <Card card ='🎃' feedback ='justMismatched' onClicked = {this.handleCardClick}/>
      <GuessCount guesses ={456}/>
      {this.won && <p>Gagné</p>}
        
    </div>)
  }
}

export default App;
