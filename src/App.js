import { Component } from 'react';
import Card from './Card.js'
import './App.css';

class App extends Component {
  render() {
    return <div className='memory'>
        <Card />        
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
  }
}

export default App;
