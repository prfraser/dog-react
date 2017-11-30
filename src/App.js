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
    axios.get('api/dogs')
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

export default App;
