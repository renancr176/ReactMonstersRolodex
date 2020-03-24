import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { CardList } from './components/card-list/card-list.coponent';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() 
  {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }

  handleChange = (event) => {
    this.setState({searchField: event.target.value});
  }

  render()
  {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <SearchBox placeholder='Search monsters'
          handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
