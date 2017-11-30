import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    dogs: [],
    owners: []
  }

  render() {
    return (
      <div className="App">
        <strong>Dogs:</strong>
        {
          this.state.dogs.map(dog => <p>{dog}</p>)
        }
        <strong>Owners:</strong>
        {
          this.state.owners.map(owner => <p>{owner}</p>)
        }
      </div>
    );
  }

  componentDidMount(){
    axios.get('api/dogs')
      .then((response) => {
        console.log(response.data);
        this.setState({
          dogs: response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      });
      axios.get('api/owners')
      .then((response) => {
        console.log(response.data);
        this.setState({
          owners: response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

export default App;
