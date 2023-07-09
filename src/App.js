import React from 'react';
import Card from './Card';
import { robots } from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css'
import Scroll from './Scroll';

class App extends React.Component{

  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
   
    
  }
  
  render() {
    
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    console.log(filteredRobots);


  return (
    <div className='tc'>
      <h1 className='f1 lightest-blue'>ROBOFRIENDS</h1>
      <SearchBox searchChange={this.onSearchChange} />
      <Scroll>
      <CardList robots={filteredRobots}/>
      </Scroll>
    </div>
  );
  }
}

export default App;
