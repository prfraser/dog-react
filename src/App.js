import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    dogs: ['Mark', 'Henry', 'Bastile']
  }

  render() {
    return (
      <div className="App">
        {
          this.state.dogs.map(dog => <p>{dog}</p>)
        }
      </div>
    );
  }

  componentDidMount(){
    axios.get('http://localhost:8000/api/dogs')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

export default App;
