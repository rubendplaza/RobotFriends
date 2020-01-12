import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import { robots } from '../robots';

//Lifecycle hooks are built in with react, they get run everytime a component does something, the three types are:
//1. mounting
//2. updating
//3. unmounting
class App extends React.Component {
  //constructor is a mounting function, when mounting functions are called they are inserted into the dom by replacing the root that exists in the current dom, stemming from index.js
  constructor() {
    super();
    //since it has state it is called a smart component, they tend to have class syntax
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  //this is a lifecycle hook therefore is executed at runtime and does not need to be called
  componentDidMount() {
    //fetch is a method of the window object
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(users => this.setState({ robots: users }));
    document.title = 'Mr. Robot Friends';
    this.setState({ robots: robots });
  }

  //since this is our own function we need to use arrow functions, functions built in with react do not need to be arrow functions
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  //whenever a change in state occurs the component render function is ran again to render in the state change
  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    if(!robots.length) {
      return <h1>Loading</h1>
    }
    else {
      return(
        <div className='tc'>
          <h1 className='f1'>Mr. Robot and Friends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots}/>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;